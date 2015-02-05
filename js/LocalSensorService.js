angular.module('smartHome').factory('localSensorService', ['$q', function($q) { 
      return {
        counter: 0,
        getSensors: function() {
          var deferred = $q.defer();
          this.counter = this.counter + 1;
          var res = [{id:0, type:'test',   name:'test #'+this.counter, state: 'on', alarm: 'no' },
                     {id:1, type:'motion', name:'motion sensor',       state: 'on', alarm: 'no' },
                     {id:2, type:'door',   name:'door sensor',         state: 'on', alarm: 'no' }];
          deferred.resolve(res);
          return deferred.promise;
        },
        testAlarm: function(index) {
            // TODO
        }
      }
    }]);
