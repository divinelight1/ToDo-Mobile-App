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
		controller: "todorouteController"
	})
});
//controllers

var mainController = function($scope , $route , $http){

};
myApp.controller('mainController' , mainController);

var menuController = function($scope , $route , $http){

};
myApp.controller('menuController' , menuController);

var todorouteController = function($scope , $route , $http){

};
myApp.controller('todorouteController' , todorouteController);




// todo
myApp.controller('toDoController' , toDoController);

var toDoController = function($scope){
	$scope.todos = [
		{'title' : 'add task' , 'done':false}
	];

	$scope.addToDo = function(){
		$scope.todos.push({'title' : $scope.newtodo , 'done':false});
		$scope.newtodo = "";
	};
	$scope.clearCompleted = function(){
		$scope.todos = $scope.todos.filter(function(item){
			return !item.done;
		})
	};
};