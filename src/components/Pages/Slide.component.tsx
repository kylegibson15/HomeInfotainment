import React, { CSSProperties } from 'react';

import { useTilt } from '../../hooks';
import { ISlideProps } from '../../state/interfaces';
import styles from '../../styles';

function Slide({ slide, offset }: ISlideProps) {
  const active = offset === 0 ? true : null;
  const ref = useTilt(active);

  return (
    <div
      ref={ref}
      className={styles.slide}
      data-active={active}
      style={{
        "--offset": offset,
        "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1
      } as CSSProperties}
    >
      <div
        className={styles.slideBackground}
        data-active={active}
        style={{
          backgroundImage: `url('${slide.image}')`
        }}
      />
      <div
        className={styles.slideContent}
        data-active={active}
        style={{
          backgroundImage: `url('${slide.image}')`
        }}
      >
        <div className={styles.slideContentInner} data-active={active}>
          <h2 className={styles.slideTitle}>{slide.title}</h2>
          <h3 className={styles.slideSubtitle}>{slide.subtitle}</h3>
          <p className={styles.slideDescription}>{slide.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Slide;
