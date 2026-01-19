import Link from 'next/link';
import EventCard from './EventCard';

const EventSection = ({ title, events, viewAllLink, emptyMessage = "Tidak ada event untuk ditampilkan" }) => {
    return (
        <section className="mb-12">
            {/* Section Header */}
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-[--foreground]">{title}</h2>
                {viewAllLink && events.length > 0 && (
                    <Link
                        href={viewAllLink}
                        className="text-[--primary] hover:text-[--primary]/80 font-semibold text-sm flex items-center gap-1 group"
                    >
                        Lihat Semua
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                )}
            </div>

            {/* Events Grid or Empty State */}
            {events.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {events.map(event => (
                        <EventCard key={event.id} event={event} />
                    ))}
                </div>
            ) : (
                <div className="bg-gray-50 rounded-2xl p-8 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-300 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-gray-500">{emptyMessage}</p>
                </div>
            )}
        </section>
    );
};

export default EventSection;
