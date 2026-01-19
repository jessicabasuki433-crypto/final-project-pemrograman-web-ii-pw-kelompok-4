import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-[--primary] text-white mt-16">
            {/* Main Footer */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Logo & Description */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-9 h-9 bg-[--secondary] rounded-lg flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[--primary]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>
                                <span className="text-lg font-semibold block leading-tight">Event Kampus</span>
                                <span className="text-[--secondary] text-xs">Universitas Nurul Huda</span>
                            </div>
                        </div>
                        <p className="text-white/70 text-sm leading-relaxed mb-4">
                            Platform informasi event kampus Universitas Nurul Huda.
                        </p>
                        {/* Social Media */}
                        <div className="flex gap-2">
                            <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                </svg>
                            </a>
                            <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                            <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Lokasi Kampus */}
                    <div>
                        <h3 className="text-sm font-semibold mb-4 text-[--secondary]">Lokasi Kampus</h3>
                        <div className="space-y-3 text-sm">
                            <div>
                                <p className="font-medium text-white">Kampus A & B</p>
                                <p className="text-white/60">Jl. Kota Baru, Desa Sukaraja, Kec. Buay Madang</p>
                            </div>
                            <div>
                                <p className="font-medium text-white">Kampus C</p>
                                <p className="text-white/60">Jl. Tanah Merah Jembatan 2, Desa Tanah Merah</p>
                            </div>
                        </div>
                    </div>

                    {/* Menu */}
                    <div>
                        <h3 className="text-sm font-semibold mb-4 text-[--secondary]">Menu</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/" className="text-white/70 hover:text-white transition-colors">Beranda</Link>
                            </li>
                            <li>
                                <Link href="/#semua-event" className="text-white/70 hover:text-white transition-colors">Daftar Event</Link>
                            </li>
                            <li>
                                <Link href="/kalender" className="text-white/70 hover:text-white transition-colors">Kalender Event</Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-white/70 hover:text-white transition-colors">Tentang Aplikasi</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Kontak */}
                    <div>
                        <h3 className="text-sm font-semibold mb-4 text-[--secondary]">Kontak</h3>
                        <ul className="space-y-2 text-sm text-white/70">
                            <li className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                info@unh.ac.id
                            </li>
                            <li className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                (0735) 123456
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-white/10">
                <div className="container mx-auto px-4 py-4">
                    <p className="text-center text-white/50 text-sm">
                        © 2026 <span className="text-[--secondary]">Universitas Nurul Huda</span> • Sistem Informasi Event Kampus
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
