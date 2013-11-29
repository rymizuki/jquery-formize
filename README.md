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

<form class="form">
    <input type="text" name="name">
    <input type="text" name="age">
    <button type="submit">submit</button>
</form>
```

## Documentation

(comming soon)

## Examples

```javscript
jQuery(function($) {
  var form = $.formize('.form');

  var name = form.getValue('name');
  form.setValue('name', 'tarou');
});

```
