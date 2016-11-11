var gulp = require('gulp')
var sass = require('gulp-ruby-sass')
var connect = require('gulp-connect')
var inject = require('gulp-inject')
var notify = require("gulp-notify")
var bower = require('gulp-bower')
var sourcemaps = require('gulp-sourcemaps')
var concat = require('gulp-concat')
var minify = require('gulp-minify')
var browserSync = require('browser-sync').create()

var config = {
    appStatic: './app/static',
    sassPath: './app/sass',
    bowerDir: './app/bower_components'
}

gulp.task('serve1', function () {
    connect.server({
        root: 'app/static',
        port: 4000
    })
})

// Runs the bower install command.
gulp.task('bower', function() {
    return bower()
        .pipe(gulp.dest(config.bowerDir))
})


gulp.task('move_css', function(){
    var files = [
                 config.bowerDir+'/bootstrap/**/*.min.css',
                 config.bowerDir+'/font-awesome/**/*.min.css',
                 config.bowerDir+'/html5-boilerplate/**/*.css',
    ]

    return gulp.src(files)
        .pipe(gulp.dest(config.appStatic + '/css'))
})

gulp.task('move_js', function(){
    var files = [
        config.bowerDir+'/angular/**/*.min.js',
        config.bowerDir+'/angular-route/**/*.min.js',
        config.bowerDir+'/html5-boilerplate/**/js/modernizr-*.min.js'
    ]

    return gulp.src(files)
        .pipe(gulp.dest(config.appStatic + '/js'))
})

gulp.task('move_views', function(){
    var files = [
        './app/views/**/*.html',
    ]

    return gulp.src(files)
        .pipe(gulp.dest(config.appStatic + '/views'))
})

gulp.task('sass', function() {
    return sass(config.sassPath+'/**/*.sass', { style: 'compressed' })
        .pipe(gulp.dest(config.appStatic + '/css'))
        .pipe(browserSync.stream())
})

gulp.task('javascript', function() {
    var files = [
        './app/app.js',
        './app/controllers/*.js',
        './app/components/**/*.js'
    ]
    return gulp.src(files)
        .pipe(sourcemaps.init())
        .pipe(concat('all.js'))
        .pipe(minify({
            ext:{
                src:'-debug.js',
                min:'.min.js'
            }
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./app/static/js'))
})

gulp.task('inject', ['move_css', 'javascript', 'move_js', 'sass', 'move_views'], function () {
    var target = gulp.src('./app/index.html');
    var files = [
                  config.appStatic + '/css/**/*.css',
                  config.appStatic + '/js/**/angular.min.js',
                  config.appStatic + '/js/**/angular-route.js',
                  config.appStatic + '/js/**/*.min.js'
    ]
    var sources = gulp.src(files, {read: false})
    return target
        .pipe(inject(sources, {relative: true, ignorePath: ['app', 'static']}))
        .pipe(gulp.dest(config.appStatic));
})

gulp.task('js-watch', ['javascript'], function (done) {
    browserSync.reload();
    done();
});

gulp.task('serve', ['inject'], function() {

    browserSync.init({
        server: "app/static"
    });

    gulp.watch("./app/sass/**/*.sass", ['sass'])
    gulp.watch("./app/components/**/*.js", ['js-watch'])
    gulp.watch("./app/controllers/**/*.js", ['js-watch'])
    gulp.watch("./app/app.js", ['js-watch'])
    gulp.watch("./app/views/**/*.html", ['move_views']).on('change', browserSync.reload)
});

gulp.task('default', ['inject', 'serve'])