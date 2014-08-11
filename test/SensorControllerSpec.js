describe('SensorController', function() {
    var scope, createController;

    beforeEach(module('smartHome'));
    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();

        createController = function() {
            return $controller('SensorController', {
                '$scope': scope
            });
        };
    }));

    it('sensors should exist', function() {
        var controller = createController();
        expect(scope.sensors).toBeDefined();
    });

    it('refresh should update sensors', function() {
        var controller = createController();
        scope.sensors = null;
        scope.refresh();
        expect(scope.sensors).not.toBe(null);

    });
});
