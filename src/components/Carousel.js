'use client';

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import EventCard from './EventCard';

const Carousel = ({ events, options }) => {
  const [emblaRef] = useEmblaCarousel(options, [Autoplay()]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {events.map((event) => (
          <div className="embla__slide" key={event.id}>
            <EventCard event={event} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
