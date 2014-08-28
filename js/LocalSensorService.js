angular.module('smartHome').factory('localSensorService', ['$q', function($q) { 
      return {
        index: 0,
        getSensors: function() {
          var deferred = $q.defer();
          this.index = this.index+1;
          var res = [  {type:'motion'+this.index, name:'motion sensor', state: 'on', alarm: 'no' },
                     {type:'door'+this.index,   name:'door sensor',   state: 'on', alarm: 'no' }];
          deferred.resolve(res);
          return deferred.promise;
        }
      }
    }]);
