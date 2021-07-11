'use strict';

let isReady = false;
let fns = [];

const emit = () => {
  if (!isReady) {
    isReady = true;
    for (let i = 0; i < fns.length; ++i) {
      fns[i].call(document);
    }
    fns = null;
  }
};

if (document.readyState && document.readyState !== 'loading') {
  window.setTimeout(emit, 0);
} else {
  window.addEventListener('load', emit);
  document.addEventListener('DOMContentLoaded', emit);
  document.addEventListener('readystatechange', () => {
    if (document.readyState && document.readyState !== 'loading') {
      emit();
    }
  });
}

export default (fn) => {
  if (isReady) {
    fn.call(document);
  } else {
    fns.push(fn);
  }
};
