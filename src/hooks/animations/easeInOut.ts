import anime from 'animejs';

const easeInOut = (selector: string) => {
  return anime({
    targets: selector,
    translateX: 250,
    translateY: 30,
    delay: function (el, i) {
      return i * 100;
    },
    loop: true,
    direction: "alternate",
    easing: "easeInOutSine"
  })
};

export default easeInOut;
