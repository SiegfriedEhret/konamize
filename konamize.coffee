$.fn.konamize = (settings) ->
  container = $(this)
  defaults =
    callback: -> # empty function
    code: [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
    timer: 5000
  options = $.extend({}, defaults, settings)
  options.codeLength = options.code.length - 1
  timeOut = undefined
  progress = -1
  timeOutFunction = () ->
    progress = -1
    clearTimeout timeOut
    console.log 'cleared !'

  container.on 'keydown', (e) ->
    console.log e.keyCode
    if (!timeOut)
      timeOut = setTimeout(timeOutFunction, options.timer)
    ++progress
    if (options.code[progress] != e.keyCode)
      timeOutFunction()
    else if (progress == options.codeLength)
      options.callback()
      timeOutFunction()