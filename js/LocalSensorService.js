angular.module('smartHome').factory('localSensorService', ['$q', function($q) { 
      return {
        alarm: false,
        getSensors: function() {
          var deferred = $q.defer();
          this.alarm = !this.alarm;
          var res = [{type: 'smoke', name: 'smoke sensor', features: [
                        {type: 'smoke',       security: true, armed: false, alarm: this.alarm },
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
