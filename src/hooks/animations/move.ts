import anime from 'animejs';
import { IAnimation } from '../types';

const skiMove: IAnimation = {
  events: (selector: string) => anime({
    targets: selector,
    left: [{ value: '1rem' }],
    top: [{ value: '8rem' }],
    easing: 'linear'
  }), 
  food: (selector: string) => anime({
    targets: selector,
    right: [{ value: '1rem' }],
    top: [{ value: '8rem' }],
    easing: 'linear'
  }),
  hikes: (selector: string) => anime({
    targets: selector,
    right: [{ value: '1rem' }],
    top: [{ value: '1rem' }],
    easing: 'linear'
  }), 
  home: (selector: string) => anime({
    targets: selector,
    left: [{ value: '1rem' }],
    top: [{ value: '1rem' }],
    easing: 'linear'
  }), 
  news: (selector: string) => anime({
    targets: selector,
    right: [{ value: '1rem' }],
    top: [{ value: '15rem' }],
    left: '42.75rem',
    easing: 'linear'
  }),
  skimap: (selector: string) => anime({
    targets: selector,
    top: [{ value: '1rem' }],
    left: [{ value: '8rem' }],
    easing: 'linear',
    width: '100%',
    position: 'fixed'
  }),
  something: (selector: string) => anime({
    targets: selector,
    left: [{ value: '1rem' }],
    top: [{ value: '15rem' }],
    easing: 'linear',
    position: 'fixed'
  }),
  other: (selector: string) => anime({
    targets: selector,
    left: [{ value: '1rem' }],
    top: [{ value: '22rem' }],
    easing: 'linear',
    position: 'fixed'
  }),
};

export default skiMove;
