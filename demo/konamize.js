(function() {

  $.fn.konamize = function(settings) {
    var container, defaults, options, progress, timeOut, timeOutFunction;
    container = $(this);
    defaults = {
      callback: function() {},
      code: [38, 38, 40, 40, 37, 39, 37, 39, 66, 65],
      timer: 5000
    };
    options = $.extend({}, defaults, settings);
    options.codeLength = options.code.length - 1;
    timeOut = void 0;
    progress = -1;
    timeOutFunction = function() {
      progress = -1;
      clearTimeout(timeOut);
      return console.log('cleared !');
    };
    return container.on('keydown', function(e) {
      console.log(e.keyCode);
      if (!timeOut) {
        timeOut = setTimeout(timeOutFunction, options.timer);
      }
      ++progress;
      if (options.code[progress] !== e.keyCode) {
        return timeOutFunction();
      } else if (progress === options.codeLength) {
        options.callback();
        return timeOutFunction();
      }
    });
  };

}).call(this);
