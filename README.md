# konamize

## intro
Easy konami code integration !
The function resets when the user type a bad key or when the timer reach its limit.

## how to
* include konamize.js

Then, call the stuff:
<pre>
konamize({
  callback: function() { alert('callback'); }
});
</pre>

## parameters
* callback: the function to return
* code: the code (default `[38, 38, 40, 40, 37, 39, 37, 39, 66, 65]`)
* timer: the timer limit (default: `5000`)

## license
This script is licensed under the terms of the WTF Public License (see [here](http://en.wikipedia.org/wiki/WTFPL) and [here](http://sam.zoy.org/wtfpl/)) :
<pre>
            DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
                    Version 2, December 2004

 Copyright (C) 2004 Sam Hocevar <sam@hocevar.net>

 Everyone is permitted to copy and distribute verbatim or modified
 copies of this license document, and changing it is allowed as long
 as the name is changed.

            DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
   TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION

  0. You just DO WHAT THE FUCK YOU WANT TO.
</pre>
