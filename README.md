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

## Examples

## set_value

```javascript
form.set_value('name', 'tarou');
form.set_values({
    'name': 'tarou',
    'age' : 16
});

$('.form').formize('set_values', {'name': 'tarou'});
```

## get_value

```javascript
var name = form.get_value('name');
var data = form.get_values();

var name = $('.form').formize('get_value', 'name');
var data = $('.form').formize('get_values');
```

## get_control

```javascript
var $ctrl = form.get_control('name'); // retrun jQuery obj

var $ctrl = $('.form').formize('get_control', 'name');
```

## set_messages_callback

```javscript
form.set_messages_callback(function (name, message) {
    form.get_controll(name).after('<p class="error-message">'+message+'</p>');
});
```

## set_message
```javascript
from.set_message('name', 'name is required');
```

## reset_messages

```javascript
form.reset_messages('error-message');
```

## Release History
_(Nothing yet)_
