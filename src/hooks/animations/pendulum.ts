import anime from 'animejs';

const pendulum = (selector: string) => {
  return anime({
    targets: selector,
    rotate: [60, -60],
    duration: 3000,
    easing: 'easeInOutSine',
    direction: 'alternate',
    loop: true
  })
};

export default pendulum;