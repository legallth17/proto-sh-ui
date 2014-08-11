var sh = angular.module('smartHome', []);

sh.controller('SensorController', function($scope) {
    $scope.refresh = function() {
        $scope.sensors = [  {type:'motion', name:'motion sensor', state: 'on', alarm: 'no' },
            				{type:'door', name:'door sensor', state: 'on', alarm: 'no' },
            				{type:'temperature', name:'temperature', state: 'on', alarm: 'no' }];
    };

    $scope.refresh();

})
