(function($) {
    /*
       ======== A Handy Little QUnit Reference ========
       http://api.qunitjs.com/

       Test methods:
       module(name, {[setup][ ,teardown]})
       test(name, callback)
       expect(numberOfAssertions)
       stop(increment)
       start(decrement)
       Test assertions:
       ok(value, [message])
       equal(actual, expected, [message])
       notEqual(actual, expected, [message])
       deepEqual(actual, expected, [message])
       notDeepEqual(actual, expected, [message])
       strictEqual(actual, expected, [message])
       notStrictEqual(actual, expected, [message])
       throws(block, [expected], [message])
       */

    module('jQuery#formize', {
        // This will run before each test in this module.
        setup: function() {
            this.elems = $('#qunit-fixture').children();
        }
    });

    test('is chainable', function() {
        expect(1);
        // Not a bad test to run on collection methods.
        strictEqual(this.elems.formize(), this.elems, 'should be chainable');
    });

    module('jQuery#formize', {
        setup: function() {
            this.ctrls = [
                $('<input type="text" name="test1" value="">'),
                $('<input type="text" name="test2" value="test!">')
            ];
            this.elem = $('<form />').append(this.ctrls);
            this.form = $.formize(this.elem);
        }
    });

    test('getControl called', function () {
        expect(3);
        ok(this.form.getControl('test1') instanceof $, 'should be jQuery instance');
        strictEqual(this.form.getControl('test1').attr('name'), 'test1', 'should be a control');
        strictEqual(this.form.getControl('not_exists'), null, 'shoud be undefined');
    });

    test('getControls called', function () {
        expect(2);
        ok(this.form.getControls() instanceof $, 'should be jQuery instance');
        strictEqual(this.form.getControls().length, 2, 'should be controls length');
    });

    test('getValue called', function () {
        expect(3);
        strictEqual(this.form.getValue('test1'), "",      'should be ""');
        strictEqual(this.form.getValue('test2'), "test!", 'should be "test!"');
        strictEqual(this.form.getValue('not_exists'), null, 'should be "test!"');
    });

    test('getValues called', function () {
        expect(1);
        deepEqual(this.form.getValues(), {"test1": "", "test2": "test!"}, 'should be object');
    });

    test('setValue called', function () {
        expect(3);
        ok(this.form.setValue('test1', 'hello') instanceof $, 'should be jQuery instance');
        strictEqual(this.form.setValue('test1', 'test').val(), 'test', 'should be test');
        strictEqual(this.form.setValue('not_exists', 'test'), null, 'should be null');
    });

    test('setValues called', function () {
        expect(1);
        var data = {"test1": "set_values", "test2": "set_values2"};
        this.form.setValues(data);
        deepEqual(this.form.getValues(), data, 'setted');
    });

}(jQuery));
