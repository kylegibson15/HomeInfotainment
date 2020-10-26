import { IHikesState, ISlide } from './interfaces';

export function createHikesInitialState(): IHikesState {
  return {
    slides: createHikeSlides(),
    slideIndex: 0
  }
}

function createHikeSlides(): ISlide[] {
  return [
    {
      title: "Fraser Valley River Trail",
      subtitle: "5 Mi",
      description: "Easy and peaceful to clear your mind",
      image: "https://media-cdn.tripadvisor.com/media/photo-o/07/43/63/bd/fraser-river-trail-in.jpg"
   },
    {
      title: "Discovery Trail",
      subtitle: "1.5 Mi",
      description: "Beautiful scenes of the Continental Divide",
      image: "https://cdn-assets.alltrails.com/uploads/photo/image/28928343/extra_large_b13d42357013d4fcc97a7aabb4faf049.jpg"},
    {
      title: "Mimisa Rocks",
      subtitle: "Australia",
      description: "A piece of heaven",
      image:
        "https://images.unsplash.com/photo-1566522650166-bd8b3e3a2b4b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
    },
    {
      title: "Four",
      subtitle: "Australia",
      description: "A piece of heaven",
      image:
        "https://images.unsplash.com/flagged/photo-1564918031455-72f4e35ba7a6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
    },
    {
      title: "Five",
      subtitle: "Australia",
      description: "A piece of heaven",
      image:
        "https://images.unsplash.com/photo-1579130781921-76e18892b57b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
    }
  ];
}