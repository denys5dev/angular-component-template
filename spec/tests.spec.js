describe('Component: main', function () {
    beforeEach(module('app'));

    var controller;
    var element;

    beforeEach(inject(function ($componentController) {
        $ctrl = $componentController('main', null);
    }));

    it('function add', function () {
        expect($ctrl.add(1, 2)).toBe(3);
    });

});