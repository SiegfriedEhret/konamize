# konamize

## intro
Easy jQuery konami code integration !
The function resets when the user type a bad key or when the timer reach its limit.

## how to
* include jquery
* include konamize

Then, call the stuff:
    $(function() {
      $('body').konamize({
        callback: function() { alert('callback'); }
      });
    });

## parameters
* callback: the function to return
* code: the code (default `[38, 38, 40, 40, 37, 39, 37, 39, 66, 65]`)
* timer: the timer limit (default: `5000`)

## license
I don't care bro !