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

self.addEventListener('DOMContentLoaded', emit);
self.addEventListener('load', emit);

export default function domready(fn) {
  if (isReady) {
    fn.call(document);
  } else {
    fns.push(fn);
  }
}
