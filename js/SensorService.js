angular.module('smartHome').factory('sensorService', ['$q', '$http', function($q,$http) { 
      return {
        getSensors: function() {
            var deferred = $q.defer();
            $http
                .get('http://localhost:8080/devices')
                .success(function (data, status, headers, config) {
                    console.log("GET /devices: "+data);
                    deferred.resolve(data);
                })
                .error(function(data, status, headers, config) {
                    console.log("GET /devices: "+status);
                });
          return deferred.promise;
        }
      }
    }]);
