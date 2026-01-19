'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-white sticky top-0 z-50 border-b border-[--outline-variant]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 flex-shrink-0">
              <Image
                src="/images/logo_unuha.png"
                alt="Logo UNUHA"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[--on-surface] text-lg font-bold leading-none tracking-tight">Event Kampus</span>
              <span className="text-[--outline] text-xs font-medium tracking-wide mt-0.5">UNNUHA</span>
            </div>
          </Link>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center gap-2">
            {[
              { name: 'Beranda', path: '/' },
              { name: 'Daftar Event', path: '/#semua-event' },
              { name: 'Kalender', path: '/kalender' },
              { name: 'Tentang', path: '/about' },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`
                  px-5 py-2.5 rounded-full text-sm font-medium transition-all
                  ${pathname === item.path
                    ? 'bg-[--secondary-container] text-[--on-secondary-container]'
                    : 'text-[--on-surface-variant] hover:bg-[--surface-variant] hover:text-[--on-surface]'
                  }
                `}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-[--on-surface-variant] hover:bg-[--surface-variant] rounded-full transition-colors"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-6 border-t border-[--outline-variant] pt-4">
            <nav className="flex flex-col gap-2">
              {[
                { name: 'Beranda', path: '/' },
                { name: 'Daftar Event', path: '/#semua-event' },
                { name: 'Kalender', path: '/kalender' },
                { name: 'Tentang', path: '/about' },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className="px-4 py-3 text-[--on-surface] hover:bg-[--surface-variant] rounded-xl transition-colors font-medium border border-transparent hover:border-[--outline-variant]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
