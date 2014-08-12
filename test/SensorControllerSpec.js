describe('SensorController', function() {
    var scope, createController, mockSensorService;

    // Mock sensorService
    beforeEach(function() {
        mockSensorService = {};
        module('smartHome', function($provide) {
            $provide.value('sensorService', mockSensorService);
        });

        mockSensorService.data = [  
                            {type:'motion', name:'motion sensor', state: 'on', alarm: 'no' },
                            {type:'door', name:'door sensor', state: 'on', alarm: 'no' }];

        mockSensorService.getSensors = function() { return this.data; };


    });

    // createController function
    beforeEach(inject(function ($rootScope, $controller, sensorService) {
        scope = $rootScope.$new();

        createController = function() {
            return $controller('SensorController', {
                '$scope': scope,
                '$sensorService' : sensorService
            });
        };
    }));


    it('sensors should be available when controller initializes', function() {
        var controller = createController();
        expect(scope.sensors).toEqual(mockSensorService.data);
    });

    it('refresh should update sensors', function() {
        var newSensorList = [ {type:'motion', name:'motion sensor', state: 'on', alarm: 'no' } ];
        var controller = createController();
        mockSensorService.data = newSensorList;
        scope.refresh();
        expect(scope.sensors).toEqual(newSensorList);
    });


});
