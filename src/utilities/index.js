export function requireAll(requireFile, callback) {
  const modules = {};
  requireFile.keys().forEach((name) => {
    let module = requireFile(name);
    if (module.default) module = module.default;
    if (callback) callback(module, name);
    else modules[name] = module;
  });
  return modules;
}

export function filenameToCamelCase(str, lowerFirst = false) {
  return str
    .replace(/\.[a-z0-9]+$/i, '')
    .replace(/^\.\//, '')
    .split(/[-_/]/)
    .filter((piece) => piece.length)
    .map((el, i) => el.substr(0, 1)[(lowerFirst && i === 0) ? 'toLowerCase' : 'toUpperCase']() + el.substr(1))
    .join('');
}

export function kebabCase(str, separator = '-') {
  return str.replace(/([a-z])([A-Z])/g, `$1${separator}$2`)
    .replace(/[\s_-]+/g, separator)
    .toLowerCase();
}

export function asyncTimeout(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

export function debounce(fn, ms) {
  let timeout;
  return function (...args) {
    const collFn = () => { fn.apply(this, args); };
    clearTimeout(timeout);
    timeout = setTimeout(collFn, ms);
  };
}

export function throttle(fn, ms) {
  let isThrottle = false;
  let cashedArgs;
  let cashedThis;

  function wrapper(...args) {
    if (isThrottle) {
      cashedArgs = args;
      cashedThis = this;
      return null;
    }

    fn.apply(this, args);
    isThrottle = true;

    setTimeout(() => {
      isThrottle = false;
      if (cashedArgs) {
        wrapper.apply(cashedThis, cashedArgs);
      }
    }, ms);
  }

  return wrapper;
}
