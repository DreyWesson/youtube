export const handleScroll = (setInitState, usePrev) => {
  setInitState({
    prevScrollpos: document.body.getBoundingClientRect().top,
    visible: document.body.getBoundingClientRect().top > usePrev,
  });
};
