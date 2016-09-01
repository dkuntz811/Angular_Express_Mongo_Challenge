var heroApp = angular.module('heroApp', ['ngRoute']);

heroApp.config(['$routeProvider', function ($routeProvider){
	$routeProvider
		.when("/heros", {
			templateUrl: "/public/views/templates/heros.html",
			controller: "heroController"
		})
		.when("/display", {
			templateUrl: "/public/views/templates/display.html",
			controller: "displayController"
		})
		.otherwise({
			redirecTo: "/index"
		})
}]);
