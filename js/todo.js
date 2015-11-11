var myApp = angular.module('myApp' , []);

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
	