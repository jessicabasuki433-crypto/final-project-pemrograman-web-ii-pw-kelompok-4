'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Calendar from '@/components/Calendar';
import EventCard from '@/components/EventCard';
import { getAllEvents } from '@/data/events';

export default function KalenderPage() {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedDateEvents, setSelectedDateEvents] = useState([]);

    const allEvents = getAllEvents();

    // Handle date selection
    const handleDateSelect = (date, events) => {
        setSelectedDate(date);
        setSelectedDateEvents(events);
    };

    // Format selected date
    const formatSelectedDate = (date) => {
        if (!date) return '';
        return date.toLocaleDateString('id-ID', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
    };

    // Group events by month
    const groupEventsByMonth = () => {
        const groups = {};
        allEvents.forEach(event => {
            const date = new Date(event.date);
            const monthYear = date.toLocaleDateString('id-ID', { month: 'long', year: 'numeric' });
            if (!groups[monthYear]) {
                groups[monthYear] = [];
            }
            groups[monthYear].push(event);
        });
        return groups;
    };

    const eventsByMonth = groupEventsByMonth();

    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-grow bg-[--background]">
                {/* Page Header */}
                <div className="bg-[--primary] py-8">
                    <div className="container mx-auto px-4">
                        <h1 className="headline-medium font-bold text-white text-center">
                            Kalender Event
                        </h1>
                        <p className="body-large text-white/80 text-center mt-2">
                            Jadwal lengkap kegiatan di Universitas Nurul Huda
                        </p>
                    </div>
                </div>

                <div className="container mx-auto px-4 py-8">
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Calendar Section */}
                        <div className="lg:w-1/2 xl:w-2/5">
                            <div className="sticky top-24 space-y-6">
                                {/* Calendar Component */}
                                <Calendar onDateSelect={handleDateSelect} />

                                {/* Selected Date Events */}
                                {selectedDate && (
                                    <div className="m3-card p-6 bg-[--surface] animate-fadeIn">
                                        <h3 className="title-medium font-bold text-[--on-surface] mb-4 border-b border-[--outline-variant] pb-2">
                                            📅 {formatSelectedDate(selectedDate)}
                                        </h3>
                                        {selectedDateEvents.length > 0 ? (
                                            <div className="space-y-3">
                                                {selectedDateEvents.map(event => (
                                                    <a
                                                        key={event.id}
                                                        href={`/event/${event.id}`}
                                                        className="block p-4 rounded-xl bg-[--surface-variant]/50 hover:bg-[--surface-variant] transition-colors group border border-transparent hover:border-[--outline-variant]"
                                                    >
                                                        <div className="flex items-start gap-3">
                                                            <div className="w-10 h-10 bg-[--primary-container] text-[--on-primary-container] rounded-lg flex items-center justify-center flex-shrink-0">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                                </svg>
                                                            </div>
                                                            <div className="flex-1 min-w-0">
                                                                <h4 className="title-small font-bold text-[--on-surface] line-clamp-1 group-hover:text-[--primary]">{event.title}</h4>
                                                                <p className="body-small text-[--on-surface-variant] mt-0.5">{event.location}</p>
                                                                <div className="flex items-center gap-2 mt-2">
                                                                    <span className="text-[10px] px-2 py-0.5 bg-[--secondary-container] text-[--on-secondary-container] rounded-full font-medium">
                                                                        {event.category}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                ))}
                                            </div>
                                        ) : (
                                            <div className="text-center py-6">
                                                <p className="body-medium text-[--on-surface-variant]">Tidak ada event pada tanggal ini</p>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Events List Section */}
                        <div className="lg:w-1/2 xl:w-3/5">
                            <h2 className="headline-small font-bold text-[--on-surface] mb-6">Daftar Event per Bulan</h2>

                            <div className="space-y-8">
                                {Object.entries(eventsByMonth).map(([monthYear, events]) => (
                                    <div key={monthYear}>
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-8 h-8 bg-[--primary] text-[--on-primary] rounded-lg flex items-center justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                            <h3 className="title-large font-bold text-[--on-surface]">{monthYear}</h3>
                                            <span className="px-2 py-0.5 bg-[--surface-variant] text-[--on-surface-variant] rounded-full text-xs font-medium border border-[--outline-variant]">
                                                {events.length} event
                                            </span>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {events.map(event => (
                                                <div key={event.id} className="h-full">
                                                    <EventCard event={event} />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
