import { SlideDirectionAction } from '../actions';
import { IHikesState } from '../interfaces';

export function slidesReducer(state: IHikesState, event: any) {
  switch(event.type) {
    case SlideDirectionAction.Next:
      return {
        ...state,
        slideIndex: (state.slideIndex + 1) % state.slides.length
      };
    case SlideDirectionAction.Previous:
      return {
        ...state,
        slideIndex:
          state.slideIndex === 0 ? state.slides.length - 1 : state.slideIndex - 1
      };
    default:
      return state;
  }
};