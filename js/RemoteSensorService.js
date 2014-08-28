angular.module('smartHome').factory('remoteSensorService', ['$q', function($q) { 
      return {
        index: 0,
        getSensors: function() {
          var deferred = $q.defer();
          this.index = this.index+1;
          var res = [  {type:'motion'+this.index, name:'remote motion sensor', state: 'on', alarm: 'no' },
                     {type:'door'+this.index,   name:'remote door sensor',   state: 'on', alarm: 'no' }];
          deferred.resolve(res);
          return deferred.promise;
        }
      }
    }]);
