var myApp = angular.module('myApp' , ['ngRoute']);

//route config

myApp.config(function($routeProvider){
	$routeProvider
	.when('/' , {
		templateUrl: "pages/home.html",
		controller: "mainController"

})

	.when('/menu' , {
		templateUrl: "pages/menu.html" , 
		controller: "menuController"
	})

	.when('/todo' , {
		templateUrl: "pages/todo.html" , 
		controller: "todoController"
	})
});
//controllers

var mainController = function($scope , $route , $http){

};
myApp.controller('mainController' , mainController);

var menuController = function($scope , $route , $http){

};
myApp.controller('menuController' , menuController);

var todoController = function($scope , $route , $http){

};
myApp.controller('todoController' , todoController);




