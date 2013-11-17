# Formize

jquery-formize is form utilities for jquery.

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/rymizuki/jquery-formize/master/dist/formize.min.js
[max]: https://raw.github.com/rymizuki/jquery-formize/master/dist/formize.js

In your web page:

```html
<script src="jquery.js"></script>
<script src="dist/formize.min.js"></script>
<script>
jQuery(function($) {
  var name = $('.form').formize('get_value', 'name');
  $('.form').formize('set_value', 'name', name);
});
</script>

<form class="form">
    <input type="text" name="name">
    <input type="text" name="age">
    <button type="submit">submit</button>
</form>
```

## Documentation
_(Coming soon)_

## Examples

## set

```javascript
form.set_value('name', 'tarou');
form.set_values({
    'name': 'tarou',
    'age' : 16
});

$('.form').formize('set_values', {'name': 'tarou'});
```

## get

```javascript
var name = form.get_value('name');
var data = form.get_values();

var name = $('.form').formize('get_value', 'name');
var data = $('.form').formize('get_values');
```

## Release History
_(Nothing yet)_
