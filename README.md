# jquery-formize

jquery-formize is form utilities for jquery.

```
$('.form').formize();
```

# METHODS

a sample form;

```
<form class="form">
    <input type="text" name="name">
    <input type="text" name="age">
    <button type="submit">submit</button>
</form>
```

## initialize

return the form-ize object;

```
var form = $.formize('.form');
```

## fillIn

## set

```
form.set_value('name', 'tarou');
form.set_values({
    'name': 'tarou',
    'age' : 16
});

$('.form').formize('set_values', {'name': 'tarou'});
```

## get

```
var name = form.get_value('name');
var data = form.get_values();
```
```
var name = $('.form').formize('get_value', 'name');
var data = $('.form').formize('get_values');
```
