// import pendulum from './pendulum';
// import easeInOut from './easeInOut';
import skiMove from './move';

import { TAnimationKey, IAnimation } from '../types';

const animation = new Map<TAnimationKey, IAnimation>();
animation.set('ski-move', skiMove);

export default animation;
