angular.module('smartHome').factory('localSensorService', ['$q', function($q) { 
      return {
        counter: 0,
        getSensors: function() {
          var deferred = $q.defer();
          this.counter = this.counter + 1;
          var res = [{type: 'smoke', name: 'smoke sensor', features: [
                        {type: 'smoke',       security: true, armed: false, alarm: false },
                        {type: 'temperature', temperature: 19 }]},
                     {type: 'motion', name: 'motion sensor', features: [
                        {type: 'motion',      security: true, armed: false, alarm: false },
                        {type: 'luminosity',  luminosity: 800 },
                        {type: 'temperature', temperature: 20 }]}];

          deferred.resolve(res);
          return deferred.promise;
        },
        testAlarm: function(index) {
            // TODO
        }
      }
    }]);
