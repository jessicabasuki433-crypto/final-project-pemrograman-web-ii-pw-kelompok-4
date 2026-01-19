import Image from 'next/image';
import Link from 'next/link';
import { formatPrice } from '@/data/events';

// Kategori warna - Material 3 tonal
const categoryColors = {
  'Lomba': 'chip-lomba',
  'Seminar': 'chip-seminar',
  'Workshop': 'chip-workshop',
  'Bazar': 'chip-bazar',
  'Pameran': 'chip-pameran',
  'Festival': 'chip-festival',
  'Karir': 'chip-karir',
  'default': 'bg-[--surface-variant] text-[--on-surface-variant]'
};

const EventCard = ({ event }) => {
  const categoryClass = categoryColors[event.category] || categoryColors['default'];

  // Format tanggal
  const formatEventDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    return date.toLocaleDateString('id-ID', options);
  };

  return (
    <div className="m3-card group h-full flex flex-col hover:scale-[1.01] transition-all duration-300">
      {/* Image Container */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={event.image || '/images/events/1.jpg'}
          alt={event.title}
          fill
        />
        {/* Category Badge */}
        <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-medium border border-white/20 backdrop-blur-md ${categoryClass}`}>
          {event.category}
        </div>
        {/* Price Badge */}
        <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold border border-white/20 shadow-sm ${event.price === 0 ? 'bg-[--primary] text-[--on-primary]' : 'bg-[--secondary-container] text-[--on-secondary-container]'}`}>
          {formatPrice(event.price)}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="title-medium text-[--on-surface] mb-2 line-clamp-2 group-hover:text-[--primary] transition-colors">
          {event.title}
        </h3>
        <p className="body-medium text-[--on-surface-variant] mb-4 flex-grow line-clamp-2">
          {event.description}
        </p>

        {/* Event Info */}
        <div className="space-y-2 mb-5">
          <div className="flex items-center gap-2 text-[--on-surface-variant]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[--primary]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="body-medium">{formatEventDate(event.date)}</span>
          </div>
          <div className="flex items-center gap-2 text-[--on-surface-variant]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[--primary]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="body-medium line-clamp-1">{event.location}</span>
          </div>
        </div>

        {/* Action Button */}
        <Link
          href={`/event/${event.id}`}
          className="w-full py-2.5 bg-transparent border border-[--outline] text-[--primary] text-center rounded-full font-medium text-sm hover:bg-[--primary] hover:text-[--on-primary] hover:border-[--primary] transition-all"
        >
          Lihat Detail
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
