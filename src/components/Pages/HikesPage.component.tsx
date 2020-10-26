import React, { useReducer } from 'react';

import Slide from './Slide.component';

import styles from '../../styles';
import { createHikesInitialState } from '../../state';
import { SlideDirectionAction } from '../../state/actions';
import { slidesReducer } from '../../state/reducers';

function Hikes() {
  const [state, dispatch] = useReducer(slidesReducer, createHikesInitialState());
  const { slides } = state;

  function handlePreviousClick() {
    dispatch({ type: SlideDirectionAction.Previous});
  }

  function handleNextClick() {
    dispatch({ type: SlideDirectionAction.Next });
  }

  return (
    <div className={styles.slides}>
      <button className={styles.button} onClick={handlePreviousClick}>‹</button>

      {[...slides, ...slides, ...slides].map((slide, i) => {
        let offset = slides.length + (state.slideIndex - i);
        return <Slide slide={slide} offset={offset} key={i} />;
      })}

      <button className={styles.button} onClick={handleNextClick}>›</button>
    </div>
  );
}

export default Hikes;