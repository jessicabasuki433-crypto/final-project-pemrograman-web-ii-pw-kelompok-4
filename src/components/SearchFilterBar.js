'use client';

import { useState } from 'react';

const SearchFilterBar = ({ onSearch, onFilter }) => {
    const [keyword, setKeyword] = useState('');
    const [category, setCategory] = useState('');
    const [location, setLocation] = useState('');
    const [isExpanded, setIsExpanded] = useState(false);

    // Mock data for dropdowns
    const categories = ['Seminar', 'Workshop', 'Lomba', 'Festival', 'Pameran'];
    const locations = ['Kampus A', 'Kampus B', 'Kampus C', 'Online'];

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSearch) onSearch({ keyword, category, location });
        // Also trigger filter if provided
        if (onFilter) onFilter({ category, location });
    };

    return (
        <div className="w-full max-w-4xl mx-auto -mt-8 relative z-20 px-4">
            <form
                onSubmit={handleSubmit}
                className="bg-white/80 backdrop-blur-md border border-[--outline-variant] rounded-2xl shadow-lg p-2 md:p-3 flex flex-col md:flex-row gap-2 transition-all duration-300 hover:shadow-xl hover:bg-white"
            >
                {/* Search Input */}
                <div className="flex-1 relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[--on-surface-variant] group-focus-within:text-[--primary] transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <input
                        type="text"
                        placeholder="Cari event seru..."
                        className="w-full h-12 pl-12 pr-4 bg-transparent border-none rounded-xl focus:ring-2 focus:ring-[--primary]/20 focus:bg-[--surface-variant]/30 text-[--on-surface] placeholder:text-[--on-surface-variant]/70 outline-none transition-all"
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                    />
                </div>

                {/* Divider Desktop */}
                <div className="hidden md:block w-px h-8 self-center bg-[--outline-variant]" />

                {/* Dropdowns Container - Mobile Expandable */}
                <div className={`flex flex-col md:flex-row gap-2 ${isExpanded ? 'block' : 'hidden md:flex'}`}>
                    {/* Category Dropdown */}
                    <div className="relative min-w-[140px]">
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="w-full h-12 pl-4 pr-8 appearance-none bg-[--surface-variant]/30 hover:bg-[--surface-variant]/50 border-none rounded-xl text-sm font-medium text-[--on-surface] focus:ring-2 focus:ring-[--primary]/20 outline-none cursor-pointer transition-colors"
                        >
                            <option value="">Semua Kategori</option>
                            {categories.map(c => <option key={c} value={c}>{c}</option>)}
                        </select>
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[--on-surface-variant]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>

                    {/* Location Dropdown */}
                    <div className="relative min-w-[140px]">
                        <select
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            className="w-full h-12 pl-4 pr-8 appearance-none bg-[--surface-variant]/30 hover:bg-[--surface-variant]/50 border-none rounded-xl text-sm font-medium text-[--on-surface] focus:ring-2 focus:ring-[--primary]/20 outline-none cursor-pointer transition-colors"
                        >
                            <option value="">Semua Lokasi</option>
                            {locations.map(l => <option key={l} value={l}>{l}</option>)}
                        </select>
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[--on-surface-variant]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Mobile Expand Button */}
                <button
                    type="button"
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="md:hidden w-full py-2 text-xs font-semibold text-[--primary] bg-[--primary]/5 rounded-lg"
                >
                    {isExpanded ? 'Tutup Filter' : 'Filter Lanjutan'}
                </button>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="h-12 px-6 bg-[--primary] text-[--on-primary] font-bold rounded-xl shadow-md hover:shadow-lg hover:bg-[--primary]/90 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2"
                >
                    <span>Cari</span>
                </button>
            </form>
        </div>
    );
};

export default SearchFilterBar;
