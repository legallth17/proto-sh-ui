angular.module('smartHome').factory('sensorService', ['$http', function($http) { 
      return {
        getSensors: function() {
            return $http.get('http://localhost:8080/devices').then( 
                // success
                function (response) {
                    return response.data;
                },
                // failure
                function(response) {
                    console.log("GET /devices ERROR: "+response.status);
                    return ([]);
                });
        }
      }
    }]);
