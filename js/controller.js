angular.module('RouteControllers', [])
    .controller('HomeController', function($scope) {
      $scope.title = "Welcome to angular to do!";
    })
    .controller('RegisterController', function($scope, UserAPIService, store) {

      $scope.registrationUser = {};
      var URL = "https://morning-castle-91468.herokuapp.com/";

/*
      $scope.login = function() {
        UserAPIService.callAPI(URL + "accounts/api-token-auth/", $scope.data).then(function(results) {
          $scope.token = results.data.token;
          $scope.set('username', $scope.registrationUser.username);
          $scope.set('authToken', $scope.token);
          console.log($scope, token);
        }).catch(function(err) {
          console.log(err);
        });
      }

        $scope.submitForm = function() {
          if($scope.registrationForm.$valid) {
            $scope.registerUser.username = $scope.user.username;
            $scope.registerUser.password = $scope.user.password;

            UserAPIService.callAPI(URL + "accounts/register/", $scope.registerUser).then(function(results) {
              $scope.data = results.data;
              alert("you registered");
              $scope.login();
            }).catch(function(err) {
              alert("something went BOOM");
              console.log(err);
            });

        }


      }

    });
*/

$scope.submitForm = function() {
            if ($scope.registrationForm.$valid) {
                $scope.registrationUser.username = $scope.user.username;
                $scope.registrationUser.password = $scope.user.password;

                UserAPIService.callAPI(URL + "accounts/register/", $scope.registrationUser).then(function(results) {
                    $scope.data = results.data;
                    if ($scope.data.username == $scope.registrationUser.username && $scope.data.password == $scope.registrationUser.password){
                        alert("You have successfully registered to Angular Todo");

                        UserAPIService.callAPI(URL + "accounts/api-token-auth/", $scope.data).then(function(results) {
                            $scope.token = results.data.token;
                            store.set('username', $scope.registrationUser.username);
                            store.set('authToken', $scope.token);
                        }).catch(function(err) {
                            console.log(err);
                        });
                    }
                }).catch(function(err) {
                    console.log(err)
                });
            }
        }
    });
