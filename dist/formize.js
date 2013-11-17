/*! Formize - v0.0.0 - 2013-11-17
* https://github.com/rymizuki/jquery-formize
* Copyright (c) 2013 mizuki_r; Licensed MIT */
(function($) {

  // Collection method.
  $.fn.formize = function() {
    return this.each(function(i) {
      // Do something awesome to each selected element.
      $(this).html('awesome' + i);
    });
  };

  // Static method.
  $.formize = function(options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.formize.options, options);
    // Return something awesome.
    return 'awesome' + options.punctuation;
  };

  // Static method default options.
  $.formize.options = {
    punctuation: '.'
  };

  // Custom selector.
  $.expr[':'].formize = function(elem) {
    // Is this element awesome?
    return $(elem).text().indexOf('awesome') !== -1;
  };

}(jQuery));
