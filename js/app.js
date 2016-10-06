angular.module('ToDoApp', ['ngRoute', 'RouteControllers', 'UserService', 'angular-storage', 'TodoService']);

angular.module('ToDoApp').config(function($routeProvider) {

  $routeProvider.when('/', {
    templateUrl: 'templates/home.html',
    controller: 'HomeController'
  })
  .when('/accounts/register', {
    templateUrl: 'templates/register.html',
    controller: 'RegisterController'
  })
  .when('/todo', {
    templateUrl: 'templates/todo.html',
    controller: 'TodoController'
  });

});
