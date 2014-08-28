angular.module('smartHome').provider('sensorService', function() {
        this.mode = 'remote';
        this.$get = ['localSensorService','remoteSensorService', function(localSensorService, remoteSensorService) {
            switch(this.mode) {
                case 'local':
                    return localSensorService;
                    break;
                case 'remote':
                    return remoteSensorService;
                    break;
                default:
                    throw 'Invalid sensorService provider mode:'+this.mode;
                    break;
            }
        }]
     });
