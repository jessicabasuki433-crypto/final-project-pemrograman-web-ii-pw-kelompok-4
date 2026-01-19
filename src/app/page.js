'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroCarousel from '@/components/HeroCarousel';
import EventFilter from '@/components/EventFilter';
import EventSection from '@/components/EventSection'; // We might replace this with generic list if needed, or keep for "All Events" grid
import Calendar from '@/components/Calendar';
import CarouselEventList from '@/components/CarouselEventList';
import FeaturedSection from '@/components/FeaturedSection';
import {
  getAllEvents,
  getFeaturedEvents,
  getUpcomingEvents,
  filterEvents
} from '@/data/events';

export default function Home() {
  const [filteredEvents, setFilteredEvents] = useState(null);
  const [selectedDateEvents, setSelectedDateEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  const allEvents = getAllEvents();
  const featuredEvents = getFeaturedEvents();
  const upcomingEvents = getUpcomingEvents();

  // Example for "Popular" - just taking first 5 for demo, or real logic if available
  const popularEvents = allEvents.slice(0, 6);

  // Handle filter
  const handleFilter = (filters) => {
    if (!filters.category && !filters.location && !filters.priceType) {
      setFilteredEvents(null);
    } else {
      setFilteredEvents(filterEvents(filters));
    }
  };

  // Handle date selection from calendar
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

  const displayEvents = filteredEvents || allEvents;

  // Use the nearest upcoming event for the Featured Countdown
  const nearestEvent = upcomingEvents.length > 0 ? upcomingEvents[0] : null;

  return (
    <div className="min-h-screen flex flex-col bg-[--background]">
      <Header />

      <main className="flex-grow">
        {/* Hero Carousel Section */}
        <section className="container-custom py-6 mt-6">
          <HeroCarousel events={featuredEvents} />
        </section>

        {/* Featured / Countdown Section */}
        {nearestEvent && (
          <div className="container-custom">
            <FeaturedSection event={nearestEvent} />
          </div>
        )}

        {/* Popular Events Carousel */}
        <div className="container-custom">
          <CarouselEventList
            title="Event Terpopuler"
            events={popularEvents}
            viewAllLink="/#semua-event"
          />
        </div>

        {/* Main Content Area */}
        <div className="container-custom py-8">
          <div className="flex flex-col lg:flex-row gap-10">

            {/* Left Content (Events List) */}
            <div className="flex-1 min-w-0 space-y-12">

              {/* Filter Section */}
              <section>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="headline-small text-[--on-surface]">Cari Event</h2>
                </div>
                <EventFilter onFilter={handleFilter} />
              </section>

              {/* Grid Events Results */}
              <section id="semua-event">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="headline-small text-[--on-surface]">
                    {filteredEvents ? 'Hasil Pencarian' : 'Semua Event'}
                  </h2>
                </div>

                {displayEvents.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                    {displayEvents.map(event => (
                      <div key={event.id} className="h-full">
                        {/* Using the standard card, but wrapped to ensure height consistency */}
                        {/* We need to import EventCard directly if not using CarouselEventList here */}
                        {/* But better to use EventSection component if it supports grid, or just inline for control */}
                        <EventCardWrapper event={event} />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-12 text-center bg-[--surface-variant] rounded-2xl border border-[--outline-variant] border-dashed">
                    <p className="text-[--on-surface-variant]">Tidak ada event yang ditemukan sesuai filter.</p>
                    <button
                      onClick={() => setFilteredEvents(null)}
                      className="mt-4 text-[--primary] font-medium hover:underline"
                    >
                      Reset Filter
                    </button>
                  </div>
                )}
              </section>
            </div>

            {/* Right Sidebar (Calendar & Widgets) */}
            <div className="lg:w-80 flex-shrink-0 space-y-8">
              {/* Calendar Widget */}
              <div className="sticky top-24">
                <div className="mb-6">
                  <h3 className="title-large font-bold text-[--on-surface] mb-4 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[--primary]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Kalender Event
                  </h3>
                  <Calendar onDateSelect={handleDateSelect} />
                </div>

                {/* Selected Date Events Mini List */}
                {selectedDate && (
                  <div className="m3-card p-4 animate-fadeIn">
                    <h4 className="title-medium font-bold text-[--on-surface] mb-3 border-b border-[--outline-variant] pb-2">
                      {formatSelectedDate(selectedDate)}
                    </h4>
                    {selectedDateEvents.length > 0 ? (
                      <div className="space-y-3">
                        {selectedDateEvents.map(event => (
                          <a
                            key={event.id}
                            href={`/event/${event.id}`}
                            className="block p-3 rounded-xl bg-[--surface-variant]/50 hover:bg-[--surface-variant] transition-colors group"
                          >
                            <div className="text-xs font-semibold text-[--primary] mb-1">{event.category}</div>
                            <div className="font-semibold text-sm text-[--on-surface] line-clamp-2 group-hover:text-[--primary] transition-colors">{event.title}</div>
                            <div className="text-xs text-[--on-surface-variant] mt-1 flex items-center gap-1">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              {new Date(event.date).toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })} WIB
                            </div>
                          </a>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-4 text-[--on-surface-variant] text-sm">
                        Tidak ada event pada tanggal ini.
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

// Helper component to avoid import loop or duplication if EventCard is default export
import EventCard from '@/components/EventCard';
function EventCardWrapper({ event }) {
  return <EventCard event={event} />;
}
