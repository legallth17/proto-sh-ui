describe('LocalSensorService', function() {
    var scope, localSensorService;

    beforeEach(module('smartHome'));


    beforeEach(inject(function (_localSensorService_) {
        localSensorService = _localSensorService_;
    }));

    beforeEach(inject(function ($rootScope) {
        scope = $rootScope.$new();
    }));

    it('getSensors should return a promise', function() {
        expect(localSensorService.getSensors().then).toBeDefined();
    });

    it('getSensors promise should return sensors if success', function() {
        var sensors = null;
        localSensorService.getSensors().then(function(s) { sensors = s; });
        scope.$apply(); 
        expect(sensors).not.toBeNull();
        expect(sensors.length).toBeGreaterThan(0);
        // TODO: create a custom matcher
        // expect(sensors).toBeSensors();
        jasmine.addMatchers(null);
    });

});
