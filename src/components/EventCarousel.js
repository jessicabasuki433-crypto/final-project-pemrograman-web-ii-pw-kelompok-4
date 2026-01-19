'use client';

import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import EventCard from './EventCard';

const EventCarousel = ({ events, title, viewAllLink }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: 'start',
        slidesToScroll: 1,
        containScroll: 'trimSnaps'
    });

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    if (!events || events.length === 0) {
        return null;
    }

    return (
        <section className="mb-12">
            {/* Section Header */}
            <div className="flex items-center justify-between mb-6">
                <h2 className="headline-small text-[--foreground]">{title}</h2>
                <div className="flex items-center gap-2">
                    {viewAllLink && (
                        <a href={viewAllLink} className="text-[--primary] label-large hover:underline mr-2">
                            Lihat Semua
                        </a>
                    )}
                    <button
                        onClick={scrollPrev}
                        className="w-10 h-10 rounded-full border border-[--outline-variant] bg-[--surface] flex items-center justify-center hover:bg-[--surface-variant] transition-colors"
                        aria-label="Previous"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[--foreground]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={scrollNext}
                        className="w-10 h-10 rounded-full border border-[--outline-variant] bg-[--surface] flex items-center justify-center hover:bg-[--surface-variant] transition-colors"
                        aria-label="Next"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[--foreground]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Carousel */}
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex gap-4">
                    {events.map((event) => (
                        <div
                            key={event.id}
                            className="flex-none w-[280px] sm:w-[320px] lg:w-[340px]"
                        >
                            <EventCard event={event} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EventCarousel;
