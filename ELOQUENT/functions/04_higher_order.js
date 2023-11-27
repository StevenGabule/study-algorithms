function noisy(f) {
  return function(arg) {
    console.log(arg)
    let val = f(arg)
    console.log('Called with', arg, '- got', val)
    return val;
  }
}

function transparentWrapper(f) {
  return () => f.apply(null, arguments)
}

