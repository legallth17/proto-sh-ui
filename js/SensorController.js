angular.module('smartHome').controller('SensorController', function($scope,sensorService) {
    $scope.refresh = function() {
        $scope.sensors = sensorService.getSensors();
    };

    $scope.refresh();

})
