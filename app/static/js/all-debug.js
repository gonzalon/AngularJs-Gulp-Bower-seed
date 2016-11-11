'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);

'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: '/views/view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [function() {
  console.log("Prueba")
}]);
'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: '/views/view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', [function() {
  console.log("View Control 2, Updated")
}]);
'use strict';

angular.module('myApp.version.interpolate-filter', [])

.filter('interpolate', ['version', function(version) {
  return function(text) {
    return String(text).replace(/\%VERSION\%/mg, version);
  };
}]);

'use strict';

angular.module('myApp.version.version-directive', [])

.directive('appVersion', ['version', function(version) {
  return function(scope, elm, attrs) {
    elm.text(version);
  };
}]);

'use strict';

angular.module('myApp.version', [
  'myApp.version.interpolate-filter',
  'myApp.version.version-directive'
])

.value('version', '0.1');

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsInZpZXcxLmpzIiwidmlldzIuanMiLCJ2ZXJzaW9uL2ludGVycG9sYXRlLWZpbHRlci5qcyIsInZlcnNpb24vdmVyc2lvbi1kaXJlY3RpdmUuanMiLCJ2ZXJzaW9uL3ZlcnNpb24uanMiXSwibmFtZXMiOlsiYW5ndWxhciIsIm1vZHVsZSIsImNvbmZpZyIsIiRsb2NhdGlvblByb3ZpZGVyIiwiJHJvdXRlUHJvdmlkZXIiLCJoYXNoUHJlZml4Iiwib3RoZXJ3aXNlIiwicmVkaXJlY3RUbyIsIndoZW4iLCJ0ZW1wbGF0ZVVybCIsImNvbnRyb2xsZXIiLCJjb25zb2xlIiwibG9nIiwiZmlsdGVyIiwidmVyc2lvbiIsInRleHQiLCJTdHJpbmciLCJyZXBsYWNlIiwiZGlyZWN0aXZlIiwic2NvcGUiLCJlbG0iLCJhdHRycyIsInZhbHVlIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUdBQSxTQUFBQyxPQUFBLFNBQ0EsVUFDQSxjQUNBLGNBQ0Esa0JBRUFDLFFBQUEsb0JBQUEsaUJBQUEsU0FBQUMsRUFBQUMsR0FDQUQsRUFBQUUsV0FBQSxLQUVBRCxFQUFBRSxXQUFBQyxXQUFBLGNDVkFQLFFBQUFDLE9BQUEsZUFBQSxZQUVBQyxRQUFBLGlCQUFBLFNBQUFFLEdBQ0FBLEVBQUFJLEtBQUEsVUFDQUMsWUFBQSwwQkFDQUMsV0FBQSxpQkFJQUEsV0FBQSxhQUFBLFdBQ0FDLFFBQUFDLElBQUEsYUNWQVosUUFBQUMsT0FBQSxlQUFBLFlBRUFDLFFBQUEsaUJBQUEsU0FBQUUsR0FDQUEsRUFBQUksS0FBQSxVQUNBQyxZQUFBLDBCQUNBQyxXQUFBLGlCQUlBQSxXQUFBLGFBQUEsV0FDQUMsUUFBQUMsSUFBQSw4QkNWQVosUUFBQUMsT0FBQSx1Q0FFQVksT0FBQSxlQUFBLFVBQUEsU0FBQUMsR0FDQSxNQUFBLFVBQUFDLEdBQ0EsTUFBQUMsUUFBQUQsR0FBQUUsUUFBQSxnQkFBQUgsT0NKQWQsUUFBQUMsT0FBQSxzQ0FFQWlCLFVBQUEsY0FBQSxVQUFBLFNBQUFKLEdBQ0EsTUFBQSxVQUFBSyxFQUFBQyxFQUFBQyxHQUNBRCxFQUFBTCxLQUFBRCxPQ0pBZCxRQUFBQyxPQUFBLGlCQUNBLG1DQUNBLG9DQUdBcUIsTUFBQSxVQUFBIiwiZmlsZSI6ImFsbC1kZWJ1Zy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuLy8gRGVjbGFyZSBhcHAgbGV2ZWwgbW9kdWxlIHdoaWNoIGRlcGVuZHMgb24gdmlld3MsIGFuZCBjb21wb25lbnRzXG5hbmd1bGFyLm1vZHVsZSgnbXlBcHAnLCBbXG4gICduZ1JvdXRlJyxcbiAgJ215QXBwLnZpZXcxJyxcbiAgJ215QXBwLnZpZXcyJyxcbiAgJ215QXBwLnZlcnNpb24nXG5dKS5cbmNvbmZpZyhbJyRsb2NhdGlvblByb3ZpZGVyJywgJyRyb3V0ZVByb3ZpZGVyJywgZnVuY3Rpb24oJGxvY2F0aW9uUHJvdmlkZXIsICRyb3V0ZVByb3ZpZGVyKSB7XG4gICRsb2NhdGlvblByb3ZpZGVyLmhhc2hQcmVmaXgoJyEnKTtcblxuICAkcm91dGVQcm92aWRlci5vdGhlcndpc2Uoe3JlZGlyZWN0VG86ICcvdmlldzEnfSk7XG59XSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbmFuZ3VsYXIubW9kdWxlKCdteUFwcC52aWV3MScsIFsnbmdSb3V0ZSddKVxuXG4uY29uZmlnKFsnJHJvdXRlUHJvdmlkZXInLCBmdW5jdGlvbigkcm91dGVQcm92aWRlcikge1xuICAkcm91dGVQcm92aWRlci53aGVuKCcvdmlldzEnLCB7XG4gICAgdGVtcGxhdGVVcmw6ICcvdmlld3MvdmlldzEvdmlldzEuaHRtbCcsXG4gICAgY29udHJvbGxlcjogJ1ZpZXcxQ3RybCdcbiAgfSk7XG59XSlcblxuLmNvbnRyb2xsZXIoJ1ZpZXcxQ3RybCcsIFtmdW5jdGlvbigpIHtcbiAgY29uc29sZS5sb2coXCJQcnVlYmFcIilcbn1dKTsiLCIndXNlIHN0cmljdCc7XG5cbmFuZ3VsYXIubW9kdWxlKCdteUFwcC52aWV3MicsIFsnbmdSb3V0ZSddKVxuXG4uY29uZmlnKFsnJHJvdXRlUHJvdmlkZXInLCBmdW5jdGlvbigkcm91dGVQcm92aWRlcikge1xuICAkcm91dGVQcm92aWRlci53aGVuKCcvdmlldzInLCB7XG4gICAgdGVtcGxhdGVVcmw6ICcvdmlld3MvdmlldzIvdmlldzIuaHRtbCcsXG4gICAgY29udHJvbGxlcjogJ1ZpZXcyQ3RybCdcbiAgfSk7XG59XSlcblxuLmNvbnRyb2xsZXIoJ1ZpZXcyQ3RybCcsIFtmdW5jdGlvbigpIHtcbiAgY29uc29sZS5sb2coXCJWaWV3IENvbnRyb2wgMiwgVXBkYXRlZFwiKVxufV0pOyIsIid1c2Ugc3RyaWN0JztcblxuYW5ndWxhci5tb2R1bGUoJ215QXBwLnZlcnNpb24uaW50ZXJwb2xhdGUtZmlsdGVyJywgW10pXG5cbi5maWx0ZXIoJ2ludGVycG9sYXRlJywgWyd2ZXJzaW9uJywgZnVuY3Rpb24odmVyc2lvbikge1xuICByZXR1cm4gZnVuY3Rpb24odGV4dCkge1xuICAgIHJldHVybiBTdHJpbmcodGV4dCkucmVwbGFjZSgvXFwlVkVSU0lPTlxcJS9tZywgdmVyc2lvbik7XG4gIH07XG59XSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbmFuZ3VsYXIubW9kdWxlKCdteUFwcC52ZXJzaW9uLnZlcnNpb24tZGlyZWN0aXZlJywgW10pXG5cbi5kaXJlY3RpdmUoJ2FwcFZlcnNpb24nLCBbJ3ZlcnNpb24nLCBmdW5jdGlvbih2ZXJzaW9uKSB7XG4gIHJldHVybiBmdW5jdGlvbihzY29wZSwgZWxtLCBhdHRycykge1xuICAgIGVsbS50ZXh0KHZlcnNpb24pO1xuICB9O1xufV0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5hbmd1bGFyLm1vZHVsZSgnbXlBcHAudmVyc2lvbicsIFtcbiAgJ215QXBwLnZlcnNpb24uaW50ZXJwb2xhdGUtZmlsdGVyJyxcbiAgJ215QXBwLnZlcnNpb24udmVyc2lvbi1kaXJlY3RpdmUnXG5dKVxuXG4udmFsdWUoJ3ZlcnNpb24nLCAnMC4xJyk7XG4iXX0=
