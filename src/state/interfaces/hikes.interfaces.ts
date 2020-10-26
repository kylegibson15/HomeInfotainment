export interface IHikesState {
  slides: ISlide[];
  slideIndex: number;
}
export interface ISlideProps {
  slide: ISlide;
  offset: number;
}

export interface ISlide {
  title: string;
  subtitle: string;
  description: string;
  image: string;
}