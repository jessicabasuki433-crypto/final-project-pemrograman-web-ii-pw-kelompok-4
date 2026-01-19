'use client';

import React from 'react';
import Link from 'next/link';
import CountdownTimer from './CountdownTimer';

const FeaturedSection = ({ event }) => {
    if (!event) return null;

    return (
        <section className="relative w-full overflow-hidden rounded-3xl my-12 bg-gray-900 text-white">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop"
                    alt="Background"
                    className="w-full h-full object-cover opacity-40 mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent"></div>
                {/* Abstract shapes */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[--primary] rounded-full filter blur-[100px] opacity-20 translate-x-1/3 -translate-y-1/3"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-[--secondary] rounded-full filter blur-[120px] opacity-10 -translate-x-1/3 translate-y-1/3"></div>
            </div>

            <div className="relative z-10 container mx-auto px-6 py-12 md:py-16">
                <div className="flex flex-col md:flex-row items-center gap-10">
                    <div className="flex-1 space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                            <span className="w-2 h-2 rounded-full bg-[--secondary] animate-pulse"></span>
                            <span className="text-xs font-medium tracking-wide">Event Terdekat</span>
                        </div>

                        <h2 className="headline-large font-bold max-w-2xl leading-tight text-white">
                            {event.title}
                        </h2>

                        <p className="body-large text-gray-300 max-w-xl line-clamp-2">
                            {event.description}
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <Link
                                href={`/event/${event.id}`}
                                className="btn-filled bg-[--secondary] text-[--primary] hover:bg-white border-0"
                            >
                                Daftar Sekarang
                            </Link>
                            <Link
                                href={`/event/${event.id}`}
                                className="btn-outlined text-white border-white/30 hover:bg-white/10 hover:border-white"
                            >
                                Lihat Detail
                            </Link>
                        </div>
                    </div>

                    <div className="flex-shrink-0 w-full md:w-auto">
                        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl">
                            <p className="text-center text-sm font-medium text-gray-400 mb-4 uppercase tracking-widest">Waktu Tersisa</p>
                            <CountdownTimer targetDate={event.date} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedSection;
