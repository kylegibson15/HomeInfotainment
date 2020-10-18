import { AnimeInstance } from "animejs";

export type TAnimationKey = 'easeInOut' | 'ski-move' | 'pendulum';

export type TAnimationFn = (selector: string) => AnimeInstance;

export interface IAnimation { 
  events: TAnimationFn;
  food: TAnimationFn;
  hikes: TAnimationFn;
  home: TAnimationFn; 
  news: TAnimationFn; 
  skimap: TAnimationFn;
  something: TAnimationFn;
  other: TAnimationFn;
};

export interface IAnimationOptions {
  el: Element | null;
}
