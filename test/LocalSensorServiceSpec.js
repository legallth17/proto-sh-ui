describe('LocalSensorService', function() {
    var scope, localSensorService;

    beforeEach(module('smartHome'));


    beforeEach(inject(function (_localSensorService_) {
        localSensorService = _localSensorService_;
    }));

    beforeEach(inject(function ($rootScope) {
        scope = $rootScope.$new();
    }));

    // ensure sensor matchers are defined
    beforeEach(sensorMatchers);

    it('getSensors should return a promise', function() {
        expect(localSensorService.getSensors().then).toBeDefined();
    });

    it('getSensors promise should return sensors if success', function() {
        var sensors = null;
        localSensorService.getSensors().then(function(s) { sensors = s; });
        scope.$apply(); 
        expect(sensors).toBeSensors();
    });

    it('getSensors should return a different result for each call', function() {
        var sensors1 = null;
        var sensors2 = null;
        localSensorService.getSensors().then(function(s) { sensors1 = s; });
        scope.$apply();
        localSensorService.getSensors().then(function(s) { sensors2 = s; });
        scope.$apply();
        expect(sensors2).not.toEqual(sensors1);

    });

    it('testAlarm should trigger alarm', function() {
        var sensors = null;
        localSensorService.getSensors().then(function(s) { sensors = s; });
        scope.$apply();
        localSensorService.testAlarm( 1 );
        localSensorService.testAlarm( 2 );
        localSensorService.getSensors().then(function(s) { sensors = s; });
        scope.$apply();
        expect(sensors[1].alarm).toEqual('yes');
        expect(sensors[2].alarm).toEqual('yes');
    });


});
