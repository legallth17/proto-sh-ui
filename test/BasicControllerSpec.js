describe('BasicController', function() {
    var scope, createController;

    beforeEach(module('myApp'));
    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();

        createController = function() {
            return $controller('BasicController', {
                '$scope': scope
            });
        };
    }));

    it('isOk should be true', function() {
        var controller = createController();
        expect(scope.testOk).toBe(true);
    });
});
