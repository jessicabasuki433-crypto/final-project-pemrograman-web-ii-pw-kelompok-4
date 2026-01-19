import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CountdownTimer from '@/components/CountdownTimer';
import EventCard from '@/components/EventCard';
import { getEventById, getAllEvents, formatDate, formatTime, formatPrice } from '@/data/events';
import { notFound } from 'next/navigation';

// Generate static params for all events
export async function generateStaticParams() {
    const events = getAllEvents();
    return events.map((event) => ({
        id: String(event.id),
    }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
    const { id } = await params;
    const event = getEventById(id);

    if (!event) {
        return {
            title: 'Event Tidak Ditemukan',
        };
    }

    return {
        title: `${event.title} | Event Kampus UNH`,
        description: event.description,
    };
}

export default async function EventDetail({ params }) {
    const { id } = await params;
    const event = getEventById(id);

    if (!event) {
        notFound();
    }

    // Get related events (same category, excluding current)
    const allEvents = getAllEvents();
    const relatedEvents = allEvents
        .filter(e => e.category === event.category && e.id !== event.id)
        .slice(0, 3);

    // Kategori warna
    const categoryColors = {
        'Lomba': 'bg-purple-100 text-purple-700',
        'Seminar': 'bg-blue-100 text-blue-700',
        'Workshop': 'bg-orange-100 text-orange-700',
        'Bazar': 'bg-pink-100 text-pink-700',
        'Pameran': 'bg-teal-100 text-teal-700',
        'Festival': 'bg-yellow-100 text-yellow-700',
        'Karir': 'bg-green-100 text-green-700',
        'default': 'bg-gray-100 text-gray-700'
    };

    const categoryColor = categoryColors[event.category] || categoryColors['default'];

    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-grow">
                {/* Hero Section */}
                <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full">
                    <Image
                        src={event.image || '/images/events/1.jpg'}
                        alt={event.title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />

                    {/* Breadcrumb */}
                    <div className="absolute top-4 left-0 right-0">
                        <div className="container mx-auto px-4">
                            <nav className="flex items-center gap-2 text-white/80 text-sm">
                                <Link href="/" className="hover:text-white transition-colors">Beranda</Link>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                                <span className="text-white">{event.title}</span>
                            </nav>
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="container mx-auto px-4 -mt-32 relative z-10 pb-16">
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Main Content */}
                        <div className="flex-1">
                            <div className="bg-[--surface] rounded-2xl shadow-2xl overflow-hidden">
                                {/* Event Header */}
                                <div className="p-6 md:p-8 border-b border-gray-100">
                                    <div className="flex flex-wrap items-center gap-3 mb-4">
                                        <span className={`px-4 py-1.5 rounded-full text-sm font-semibold ${categoryColor}`}>
                                            {event.category}
                                        </span>
                                        <span className={`px-4 py-1.5 rounded-full text-sm font-bold ${event.price === 0 ? 'bg-[--primary] text-white' : 'bg-[--secondary] text-[--primary]'}`}>
                                            {formatPrice(event.price)}
                                        </span>
                                    </div>
                                    <h1 className="text-2xl md:text-4xl font-bold text-[--foreground] mb-4">
                                        {event.title}
                                    </h1>
                                    <p className="text-gray-500 text-sm">
                                        Diselenggarakan oleh <span className="font-semibold text-[--primary]">{event.organizer}</span>
                                    </p>
                                </div>

                                {/* Countdown Section */}
                                <div className="p-6 md:p-8 bg-gray-50 border-b border-gray-100">
                                    <h2 className="text-lg font-bold text-center text-[--foreground] mb-6">
                                        ⏰ Hitung Mundur Event
                                    </h2>
                                    <CountdownTimer targetDate={event.date} />
                                </div>

                                {/* Description */}
                                <div className="p-6 md:p-8">
                                    <h2 className="text-xl font-bold text-[--foreground] mb-4">Deskripsi Event</h2>
                                    <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                                        {event.description}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:w-80 xl:w-96">
                            <div className="sticky top-24 space-y-6">
                                {/* Event Info Card */}
                                <div className="bg-[--surface] rounded-2xl shadow-xl p-6">
                                    <h3 className="text-lg font-bold text-[--foreground] mb-4">Informasi Event</h3>

                                    <div className="space-y-4">
                                        {/* Date */}
                                        <div className="flex items-start gap-3">
                                            <div className="w-10 h-10 bg-[--primary]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[--primary]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-500 font-medium">Tanggal</p>
                                                <p className="font-semibold text-[--foreground]">{formatDate(event.date)}</p>
                                            </div>
                                        </div>

                                        {/* Time */}
                                        <div className="flex items-start gap-3">
                                            <div className="w-10 h-10 bg-[--primary]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[--primary]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-500 font-medium">Waktu</p>
                                                <p className="font-semibold text-[--foreground]">{formatTime(event.date)}</p>
                                            </div>
                                        </div>

                                        {/* Location */}
                                        <div className="flex items-start gap-3">
                                            <div className="w-10 h-10 bg-[--primary]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[--primary]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-500 font-medium">Lokasi</p>
                                                <p className="font-semibold text-[--foreground]">{event.location}</p>
                                                <p className="text-sm text-gray-500">{event.address}</p>
                                            </div>
                                        </div>

                                        {/* Price */}
                                        <div className="flex items-start gap-3">
                                            <div className="w-10 h-10 bg-[--primary]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[--primary]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-500 font-medium">Biaya Pendaftaran</p>
                                                <p className={`font-bold text-lg ${event.price === 0 ? 'text-[--primary]' : 'text-[--foreground]'}`}>
                                                    {formatPrice(event.price)}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Register Button */}
                                    <a
                                        href={event.registrationLink}
                                        className="w-full mt-6 py-3.5 bg-[--primary] text-white text-center rounded-xl font-bold text-lg hover:bg-[--primary]/90 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                        </svg>
                                        Daftar Sekarang
                                    </a>
                                </div>

                                {/* Share Card */}
                                <div className="bg-[--surface] rounded-2xl shadow-xl p-6">
                                    <h3 className="text-lg font-bold text-[--foreground] mb-4">Bagikan Event</h3>
                                    <div className="flex gap-3">
                                        <button className="flex-1 py-2.5 bg-blue-500 text-white rounded-xl font-medium text-sm hover:bg-blue-600 transition-colors flex items-center justify-center gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                            </svg>
                                            Facebook
                                        </button>
                                        <button className="flex-1 py-2.5 bg-green-500 text-white rounded-xl font-medium text-sm hover:bg-green-600 transition-colors flex items-center justify-center gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                                            </svg>
                                            WhatsApp
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Related Events */}
                    {relatedEvents.length > 0 && (
                        <section className="mt-16">
                            <h2 className="text-2xl font-bold text-[--foreground] mb-6">Event Serupa</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {relatedEvents.map(relEvent => (
                                    <EventCard key={relEvent.id} event={relEvent} />
                                ))}
                            </div>
                        </section>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
}
