    sensorMatchers = function() {
        jasmine.addMatchers({ toBeSensors: function() {
            return {
                compare: function(actual) {
                    console.log(actual);
                    var result = {};
                    if (actual.length == 0) {
                        // empty array
                        result.pass = true;
                        result.message = actual + ' is an empty list';
                    } else {
                        // non empty array
                        result.pass = true;
                        for(var i=0;i<actual.length && result.pass;i++) {
                            e = actual[i];
                            result.pass = (
                                e.hasOwnProperty('name') &&
                                e.hasOwnProperty('type') &&
                                e.hasOwnProperty('features'));
                        }
                        if (result.pass) {
                            result.message = actual + ' is a list of sensors';
                        } else {
                            result.message = actual + ' is not a list of sensors';
                        }                    
                    }
                    return result;
                }
            };
        }})};
