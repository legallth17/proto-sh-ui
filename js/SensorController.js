angular.module('smartHome').controller('SensorController', function($scope,sensorService) {
    $scope.refresh = function() {
         sensorService.getSensors().then(function(sensors) {
            $scope.sensors = sensors;
        });
    };

    $scope.refresh();

})
