// Made by Siegfried Ehret
// Licenced under the WTFPL

{
  const konamize = ({
        callback = () => {},
        code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65],
        timer = 5000
      }) => {
    let timeOut = undefined;
    let progress = -1;
    const codeLength = code.length - 1;

    const timeOutFunction = () => {
      progress = -1;
      clearTimeout(timeOut);
    };

    document.addEventListener('keydown', (e) => {
      if (!timeOut) {
        timeOut = setTimeout(timeOutFunction, timer);
      }

      ++progress;

      if (code[progress] !== e.keyCode) {
        timeOutFunction();
      } else if (progress === codeLength) {
        callback();
        timeOutFunction();
      }
    });
  };

  if (!window.konamize) {
    window.konamize = konamize;
  }
}
