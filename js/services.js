angular.module('UserService', [])
  .factory('UserAPIService', function($http) {
    UserAPIService = {
      registerUser: function(URL, data) {
        return $http.post(URL, data);
      }
    };
    return UserAPIService;
  });
