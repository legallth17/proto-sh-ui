describe('LocalSensorService', function() {
    var localSensorService;

    beforeEach(module('smartHome'));


    beforeEach(inject(function (_localSensorService_) {
        localSensorService = _localSensorService_;
    }));


    it('getSensors should return a promise', function() {
        expect(localSensorService.getSensors().then).toBeDefined();
    });

});
