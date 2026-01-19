'use client';

import { useState } from 'react';
import { getCategories } from '@/data/events';

const EventFilter = ({ onFilter }) => {
    const [category, setCategory] = useState('');
    const [priceType, setPriceType] = useState('');

    const categories = getCategories();

    const handleFilter = (cat, price) => {
        setCategory(cat);
        setPriceType(price);
        onFilter({ category: cat, priceType: price });
    };

    return (
        <div className="mb-0">
            <div className="flex flex-wrap items-center gap-3">
                {/* All Filter */}
                <button
                    onClick={() => handleFilter('', '')}
                    className={`m3-chip transition-all ${!category && !priceType
                        ? 'bg-[--secondary-container] text-[--on-secondary-container] border-transparent font-semibold'
                        : 'hover:bg-[--surface-variant] text-[--on-surface-variant]'
                        }`}
                >
                    Semua
                </button>

                <div className="h-6 w-px bg-[--outline-variant] mx-1 hidden sm:block" />

                {/* Category Filters */}
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => handleFilter(cat, priceType)}
                        className={`m3-chip transition-all ${category === cat
                            ? 'bg-[--primary-container] text-[--on-primary-container] border-transparent font-semibold'
                            : 'hover:bg-[--surface-variant] text-[--on-surface-variant]'
                            }`}
                    >
                        {cat}
                    </button>
                ))}

                <div className="h-6 w-px bg-[--outline-variant] mx-1 hidden sm:block" />

                {/* Price Filters */}
                <button
                    onClick={() => handleFilter(category, 'gratis')}
                    className={`m3-chip transition-all ${priceType === 'gratis'
                        ? 'bg-[--tertiary-container] text-[--on-tertiary-container] border-transparent font-semibold'
                        : 'hover:bg-[--surface-variant] text-[--on-surface-variant]'
                        }`}
                >
                    Gratis
                </button>
                <button
                    onClick={() => handleFilter(category, 'berbayar')}
                    className={`m3-chip transition-all ${priceType === 'berbayar'
                        ? 'bg-[--tertiary-container] text-[--on-tertiary-container] border-transparent font-semibold'
                        : 'hover:bg-[--surface-variant] text-[--on-surface-variant]'
                        }`}
                >
                    Berbayar
                </button>
            </div>
        </div>
    );
};

export default EventFilter;
