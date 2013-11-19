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
      var Constructor = function ($el, options) {
          this.$el = $el;
      };

      Constructor.prototype.get_value = function (name) {
          return this.$el.find('[name="'+name+'"]').val();
      };

      Constructor.prototype.get_values = function () {
          var data = {};
          this.$el.find('[name]').each(function () {
              var $this = $(this);
              data[$this.attr('name')] = $this.val();
          });
          return data;
      };

      Constructor.prototype.set_value = function (name, value) {
          this.$el.find('[name="'+name+'"]').val(value);
      };

      Constructor.prototype.set_values = function (data) {
          $.each(data, $.proxy(this.set_value, this));
      };

      return Constructor;
  })(); 


  // Collection method.
  $.fn.formize = function(action, value) {
    return this.each(function() {
        var $this = $(this),
            data  = $this.data('formize.data-api');

        if (!data) {
            data = new Formize($this);
            $this.data('formize.data-api', data);
        }

        data[action](value);
    });
  };

  // Static method.
  $.formize = function(selector) {
      return new Formize($(selector));
  };
}(jQuery));
