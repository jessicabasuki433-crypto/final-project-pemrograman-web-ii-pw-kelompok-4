import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

export const metadata = {
  title: 'Tentang Aplikasi | Event Kampus UNUHA',
  description: 'Informasi tentang Sistem Informasi Event Kampus Universitas Nurul Huda'
};

export default function About() {
  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Kalender Event',
      description: 'Lihat jadwal event dalam tampilan kalender yang interaktif dan mudah digunakan.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Countdown Timer',
      description: 'Hitung mundur waktu menuju event favorit Anda agar tidak terlewatkan.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
        </svg>
      ),
      title: 'Filter Event',
      description: 'Temukan event sesuai kategori, lokasi, dan rentang harga yang Anda inginkan.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      title: 'Data Real-time',
      description: 'Informasi event selalu diperbarui secara berkala untuk akurasi data.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Responsif',
      description: 'Tampilan optimal di berbagai perangkat, dari desktop hingga smartphone.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      ),
      title: 'Routing Dinamis',
      description: 'Navigasi cepat dan SEO-friendly untuk setiap halaman event.'
    }
  ];

  const techStack = [
    { name: 'Next.js 16', description: 'React Framework', color: 'bg-black text-white' },
    { name: 'React 19', description: 'UI Library', color: 'bg-blue-500 text-white' },
    { name: 'Tailwind CSS', description: 'Styling', color: 'bg-cyan-500 text-white' },
    { name: 'Embla Carousel', description: 'Carousel', color: 'bg-purple-500 text-white' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow bg-[--background]">
        {/* Creative Hero Section with Unsplash Background */}
        <div className="relative py-20 md:py-32 overflow-hidden">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcy-_RBQzY9pZl4ESfyj5rot7GK4hCjqDZssDNWkvKgtt4JzIbvDZs-fPsGhATsFCkKtw&usqp=CAU"
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[--primary] to-[--primary]/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-black/30" />

          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="display-medium md:display-large font-bold text-white mb-6 animate-fadeIn">
              Event Kampus UNUHA
            </h1>
            <p className="headline-small text-white/90 max-w-2xl mx-auto leading-relaxed">
              Wadah digital untuk mahasiswa Universitas Nurul Huda berkreasi dan berprestasi melalui berbagai kegiatan positif.
            </p>
          </div>
        </div>

        {/* About Section */}
        <div className="container mx-auto px-4 py-16 -mt-16 relative z-20">
          <div className="max-w-4xl mx-auto">
            <div className="m3-card p-8 md:p-12 bg-[--surface]">
              <h2 className="headline-small font-bold text-[--on-surface] mb-6 border-l-4 border-[--primary] pl-4">Cerita Kami</h2>
              <div className="body-large text-[--on-surface-variant] space-y-6 leading-relaxed">
                <p>
                  Kami percaya bahwa kampus bukan hanya tempat belajar di dalam kelas, tapi juga tempat lahirnya ide-ide hebat dan kolaborasi seru. Dulu, informasi event seringkali terlewat atau hanya menempel di papan pengumuman yang jarang dilirik. Sayang banget kan kalau ada seminar keren atau lomba seru tapi sepi peminat cuma karena kurang info?
                </p>
                <p>
                  Karena itulah <strong>Event Kampus UNH</strong> hadir. Kami ingin menjembatani semangat mahasiswa dengan peluang yang ada. Ini bukan sekadar aplikasi jadwal, tapi ruang kumpul digital dimana kamu bisa nemuin teman baru yang satu frekuensi, belajar skill baru di workshop, atau unjuk gigi di kompetisi.
                </p>
                <p>
                  Mulai dari Kampus A di Sukaraja sampai Kampus C di Tanah Merah, kami ingin memastikan tidak ada mahasiswa UNUHA yang ketinggalan keseruan. Yuk, ramaikan kampus kita dengan kegiatan yang positif dan inspiratif!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Campus Locations */}
        <div className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="headline-medium font-bold text-center text-[--on-surface] mb-12">
              Jangkauan Kampus
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {/* Kampus A */}
              <div className="m3-card p-6 border-t-4 border-[--primary] hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 bg-[--primary-container] text-[--on-primary-container] rounded-xl flex items-center justify-center text-xl font-bold mb-4">
                  A
                </div>
                <h3 className="title-large font-bold text-[--on-surface] mb-2">Kampus A (Pusat)</h3>
                <p className="body-medium text-[--on-surface-variant]">
                  Jl. Kota Baru, Desa Sukaraja, Kec. Buay Madang. Pusat administrasi dan kegiatan utama mahasiswa.
                </p>
              </div>

              {/* Kampus B */}
              <div className="m3-card p-6 border-t-4 border-[--secondary] hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 bg-[--secondary-container] text-[--on-secondary-container] rounded-xl flex items-center justify-center text-xl font-bold mb-4">
                  B
                </div>
                <h3 className="title-large font-bold text-[--on-surface] mb-2">Kampus B</h3>
                <p className="body-medium text-[--on-surface-variant]">
                  Terletak berdekatan dengan Kampus A, fokus pada pengembangan prodi-prodi tertentu.
                </p>
              </div>

              {/* Kampus C */}
              <div className="m3-card p-6 border-t-4 border-[--primary] hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 bg-[--primary-container] text-[--on-primary-container] rounded-xl flex items-center justify-center text-xl font-bold mb-4">
                  C
                </div>
                <h3 className="title-large font-bold text-[--on-surface] mb-2">Kampus C</h3>
                <p className="body-medium text-[--on-surface-variant]">
                  Jl. Tanah Merah Jembatan 2, Desa Tanah Merah. Kampus yang asri untuk kegiatan perkuliahan.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="container mx-auto px-4 py-16 bg-[--surface-variant]/30 rounded-3xl mb-16">
          <h2 className="headline-medium font-bold text-center text-[--on-surface] mb-4">
            Fitur Andalan
          </h2>
          <p className="body-large text-[--on-surface-variant] text-center mb-12 max-w-2xl mx-auto">
            Dibuat simpel tapi powerful, biar kamu makin gampang ikutan event.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="m3-card p-6 hover:bg-[--surface-variant] transition-colors bg-[--surface]">
                <div className="w-12 h-12 bg-[--tertiary-container] text-[--on-tertiary-container] rounded-xl flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="title-large font-bold text-[--on-surface] mb-2">{feature.title}</h3>
                <p className="body-medium text-[--on-surface-variant]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="container mx-auto px-4 pb-16">
          <div className="bg-[--primary] rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden">
            {/* Abstract circle decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-16 -mt-16 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-16 -mb-16 blur-3xl" />

            <h2 className="headline-medium md:display-small font-bold mb-6 relative z-10">
              Jangan Sampai Kudet!
            </h2>
            <p className="title-medium text-white/90 mb-10 max-w-xl mx-auto relative z-10">
              Cek kalender sekarang, siapa tau ada event yang kamu tunggu-tunggu.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <a
                href="/#semua-event"
                className="btn-tonal bg-[--secondary] text-[--on-secondary] hover:bg-[--secondary]/90 text-lg py-3 px-8 border-0"
              >
                Cari Event
              </a>
              <a
                href="/kalender"
                className="btn-outlined border-white text-white hover:bg-white/10 text-lg py-3 px-8"
              >
                Buka Kalender
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
