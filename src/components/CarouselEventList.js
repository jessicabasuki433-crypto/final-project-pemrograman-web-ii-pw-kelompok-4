'use client';

import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import EventCard from './EventCard';

const CarouselEventList = ({ title, events, viewAllLink }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start', skipSnaps: false, slidesToScroll: 1 });

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    if (!events || events.length === 0) return null;

    return (
        <section className="py-8">
            <div className="flex justify-between items-end mb-6 px-4">
                <div>
                    <h2 className="headline-small text-[--on-surface] mb-1">{title}</h2>
                    <div className="h-1 w-20 bg-[--primary] rounded-full"></div>
                </div>
                <div className="flex gap-2">
                    <button
                        onClick={scrollPrev}
                        className="w-10 h-10 rounded-full border border-[--outline-variant] flex items-center justify-center hover:bg-[--surface-variant] text-[--on-surface-variant] transition-colors"
                        aria-label="Previous slide"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={scrollNext}
                        className="w-10 h-10 rounded-full border border-[--outline-variant] flex items-center justify-center hover:bg-[--surface-variant] text-[--on-surface-variant] transition-colors"
                        aria-label="Next slide"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>

            <div className="overflow-hidden px-4 -mx-4" ref={emblaRef}>
                <div className="flex gap-4 pl-4 pr-12 py-2">
                    {events.map((event) => (
                        <div className="flex-[0_0_85%] sm:flex-[0_0_45%] md:flex-[0_0_35%] lg:flex-[0_0_28%] min-w-0" key={event.id}>
                            <EventCard event={event} />
                        </div>
                    ))}
                    {/* View All Slide */}
                    <div className="flex-[0_0_40%] sm:flex-[0_0_20%] flex items-center justify-center">
                        <a href={viewAllLink} className="flex flex-col items-center gap-2 text-[--primary] group p-4">
                            <div className="w-12 h-12 rounded-full border-2 border-[--primary] flex items-center justify-center group-hover:bg-[--primary-container] transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </div>
                            <span className="font-medium text-sm">Lihat Semua</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CarouselEventList;
