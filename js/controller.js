angular.module('RouteControllers', [])
    .controller('HomeController', function($scope) {
      $scope.title = "Welcome to angular to do!";
    })
    .controller('RegisterController', function($scope, UserAPIService) {

      $scope.registrationUser = {};
      var URL = "http://morning-castle-91468.herokuapp.com/"
      $scope.submitForm = function() {
        if($scope.registrationForm.$valid) {
          $scope.registrationUser.username = $scope.user.username;
          $scope.registrationUser.password = $scope.user.password;

          UserAPIService.registerUser(URL + "accounts/register/", $scope.registrationUser).then(function(results) {
            $scope.data = results.data;
            alert("You have registered!");

          }).catch(function(err) {
            alert("Oops! Something went wrong!");
            console.log(err);


          });
        }


      }

    });
