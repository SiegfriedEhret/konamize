// Made by Siegfried Ehret
// Licenced under the WTFPL

{
  const konamize = (settings) => {
    const defaults = {
      callback: () => {},
      code: [38, 38, 40, 40, 37, 39, 37, 39, 66, 65],
      timer: 5000
    };
    let timeOut = undefined;
    let progress = -1;
    const options = Object.assign({}, defaults, settings);
    options.codeLength = options.code.length - 1;

    const timeOutFunction = () => {
      progress = -1;
      clearTimeout(timeOut);
    };

    document.addEventListener('keydown', (e) => {
      if (!timeOut) {
        timeOut = setTimeout(timeOutFunction, options.timer);
      }

      ++progress;

      if (options.code[progress] != e.keyCode) {
        timeOutFunction();
      } else if (progress == options.codeLength) {
        options.callback();
        timeOutFunction();
      }
    });
  };

  if (!window.konamize) {
    window.konamize = konamize;
  }
}
