import { useEffect, useRef } from 'react';
import { AnimeInstance } from 'animejs';

// import animation from './animations';
import { TAnimationKey, TAnimationFn } from './types';

function useAnimation(selector: string, type: TAnimationKey) {
  const animationRef = useRef<null | AnimeInstance>(null);

  useEffect(() => {
    // const animate = animation.get(type) as TAnimationFn;
    // animationRef.current = animate(selector)
  }, [selector, type]);

  return animationRef.current;
}

export default useAnimation;