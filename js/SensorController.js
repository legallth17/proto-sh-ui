var sh = angular.module('smartHome', []);

sh.controller('SensorController', function($scope,sensorService) {
    $scope.refresh = function() {
        $scope.sensors = sensorService.getSensors();
    };

    $scope.refresh();

})
