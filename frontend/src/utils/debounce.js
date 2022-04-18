/* eslint-disable no-undef */

/**
 * @param {Function} fn
 * @param {Number} delay
 * @returns
 **/
export const debounce = (fn, delay) => {
  let timer;
  return () => {
    const self = this;
    const args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(self, args);
    }, delay);
  };
};
