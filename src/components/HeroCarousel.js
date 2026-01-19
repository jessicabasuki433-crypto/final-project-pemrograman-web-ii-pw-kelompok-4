'use client';

import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import Link from 'next/link';

const HeroCarousel = ({ events, options }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ ...options, loop: true }, [
        Autoplay({ delay: 5000, stopOnInteraction: false })
    ]);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    return (
        <div className="relative">
            <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
                <div className="flex">
                    {events.map((event) => (
                        <div className="flex-[0_0_100%] min-w-0 relative" key={event.id}>
                            <div className="relative h-[280px] md:h-[380px] lg:h-[420px] w-full">
                                <Image
                                    src={event.image || '/images/events/1.jpg'}
                                    alt={event.title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                                {/* Content */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                                    <div className="max-w-2xl">
                                        <span className="inline-block px-3 py-1 bg-[--secondary] text-[--primary] text-xs font-semibold rounded-full mb-3">
                                            {event.category}
                                        </span>
                                        <h2 className="text-xl md:text-3xl font-bold text-white mb-2 line-clamp-2">
                                            {event.title}
                                        </h2>
                                        <div className="flex flex-wrap items-center gap-4 text-white/80 text-sm mb-4">
                                            <div className="flex items-center gap-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                                {new Date(event.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                {event.location}
                                            </div>
                                        </div>
                                        <Link
                                            href={`/event/${event.id}`}
                                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[--primary] text-white rounded-full font-medium text-sm hover:opacity-90 transition-opacity"
                                        >
                                            Lihat Detail
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={scrollPrev}
                className="carousel-btn absolute left-4 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                aria-label="Previous"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button
                onClick={scrollNext}
                className="carousel-btn absolute right-4 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                aria-label="Next"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    );
};

export default HeroCarousel;
