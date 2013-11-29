/*
 * formize
 * https://github.com/rymizuki/jquery-formize
 *
 * Copyright (c) 2013 mizuki_r
 * Licensed under the MIT license.
 */

(function($) {
  'use strict';

  var Formize = (function () {
      var Constructor = function (selector, options) {
          this.$el = selector instanceof $ ? selector : $(selector);
          this.el  = this.$el[0];
          this.options = options;
      };

      Constructor.prototype.getControl = function (name) {
          var $ctrl = this.$el.find('[name="'+name+'"]');
          return $ctrl.length > 0 ? $ctrl : null;
      };

      Constructor.prototype.getControls = function () {
          return this.$el.find('[name]');
      };

      Constructor.prototype.getValue = function (name) {
          var $ctrl = this.getControl(name);
          return $ctrl ? $ctrl.val() : null;
      };

      Constructor.prototype.getValues = function () {
          var data = {};
          this.getControls().each(function () {
              var $this = $(this);
              data[$this.attr('name')] = $this.val();
          });
          return data;
      };

      Constructor.prototype.setValue = function (name, value) {
          var $ctrl = this.getControl(name);
          return $ctrl ? $ctrl.val(value) : null;
      };

      Constructor.prototype.setValues = function (data) {
          $.each(data, $.proxy(this.setValue, this));
      };

      return Constructor;
  })(); 

  // Static method.
  $.formize = function(selector) {
      return new Formize(selector);
  };

  // Collection method.
  $.fn.formize = function(action, value) {
    return this.each(function() {
        var $this = $(this),
            data  = $this.data('formize.data-api');

        if (!data) {
            data = $.formize($this);
            $this.data('formize.data-api', data);
        }

        if (action) {
            return data[action](value);
        }
    });
  };
}(jQuery));
