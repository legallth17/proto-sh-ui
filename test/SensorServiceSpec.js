describe('SensorService', function() {
    var $httpBackend, scope, sensorService;

    beforeEach(module('smartHome'));

    beforeEach(inject(function (_$httpBackend_) {
          var res = [{type: 'smoke', name: 'smoke sensor', features: [
                        {type: 'smoke',       security: true, armed: false, alarm: true },
                        {type: 'temperature', temperature: 19 }]},
                     {type: 'motion', name: 'motion sensor', features: [
                        {type: 'motion',      security: true, armed: false, alarm: false },
                        {type: 'luminosity',  luminosity: 800 },
                        {type: 'temperature', temperature: 20 }]}];

        $httpBackend = _$httpBackend_;
        $httpBackend.when('GET', 'http://localhost:8080/devices').respond(res);
    }));

    beforeEach(inject(function (_sensorService_) {
        sensorService = _sensorService_;
    }));

    beforeEach(inject(function ($rootScope) {
        scope = $rootScope.$new();
    }));


    // ensure sensor matchers are defined
    beforeEach(sensorMatchers);

    it('getSensors should return a promise', function() {
        expect(sensorService.getSensors().then).toBeDefined();
    });

    it('getSensors promise should return sensors if success', function() {
        var sensors = null;
        sensorService.getSensors().then(function(s) { sensors = s; });
        $httpBackend.flush();
        scope.$apply(); 
        expect(sensors).toBeSensors();
    });

});

