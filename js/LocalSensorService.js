angular.module('smartHome').factory('localSensorService', ['$q', function($q) { 
      return {
        alarm: true,
        getSensors: function() {
          var deferred = $q.defer();
          // change alarm status at each call
          this.alarm = !this.alarm;
          var res = [{type: 'smoke', name: 'smoke sensor', features: [
                        {type: 'smoke',       security: true, armed: true, alarm: false },
                        {type: 'temperature', temperature: 19 }]},
                     {type: 'door', name: 'door sensor', features: [
                        {type: 'door',      security: true, armed: false, alarm: false }]},
                     {type: 'motion', name: 'motion sensor garage', features: [
                        {type: 'motion',      security: true, armed: true, alarm: !this.alarm },
                        {type: 'luminosity',  luminosity: 650 },
                        {type: 'temperature', temperature: 18 }]},
                     {type: 'motion', name: 'motion sensor living', features: [
                        {type: 'motion',      security: true, armed: true, alarm: this.alarm },
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
