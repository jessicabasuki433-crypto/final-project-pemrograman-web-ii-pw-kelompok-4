'use client';

import { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate, compact = false }) => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        isExpired: false
    });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const difference = new Date(targetDate) - new Date();

            if (difference <= 0) {
                return {
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0,
                    isExpired: true
                };
            }

            return {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
                isExpired: false
            };
        };

        setTimeLeft(calculateTimeLeft());

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    if (timeLeft.isExpired) {
        return (
            <div className={`${compact ? 'text-sm' : 'text-lg'} font-semibold text-[--primary]`}>
                🎉 Event sudah dimulai!
            </div>
        );
    }

    if (compact) {
        return (
            <div className="flex items-center gap-1">
                <span className="bg-[--primary] text-white px-2 py-1 rounded-lg text-xs font-semibold">{timeLeft.days}h</span>
                <span className="text-[--on-surface-variant]">:</span>
                <span className="bg-[--primary] text-white px-2 py-1 rounded-lg text-xs font-semibold">{timeLeft.hours}j</span>
                <span className="text-[--on-surface-variant]">:</span>
                <span className="bg-[--primary] text-white px-2 py-1 rounded-lg text-xs font-semibold">{timeLeft.minutes}m</span>
                <span className="text-[--on-surface-variant]">:</span>
                <span className="bg-[--secondary] text-[--primary] px-2 py-1 rounded-lg text-xs font-semibold">{timeLeft.seconds}d</span>
            </div>
        );
    }

    return (
        <div className="flex items-center justify-center gap-4 md:gap-6">
            <div className="flex flex-col items-center">
                <div className="bg-[--primary] text-black text-3xl md:text-5xl font-bold w-20 md:w-24 h-20 md:h-24 rounded-2xl flex items-center justify-center">
                    {String(timeLeft.days).padStart(2, '0')}
                </div>
                <span className="text-[--on-surface-variant] text-sm mt-2 font-medium">Hari</span>
            </div>
            <span className="text-[--primary] text-3xl md:text-4xl font-bold -mt-6">:</span>
            <div className="flex flex-col items-center">
                <div className="bg-[--primary] text-black text-3xl md:text-5xl font-bold w-20 md:w-24 h-20 md:h-24 rounded-2xl flex items-center justify-center">
                    {String(timeLeft.hours).padStart(2, '0')}
                </div>
                <span className="text-[--on-surface-variant] text-sm mt-2 font-medium">Jam</span>
            </div>
            <span className="text-[--primary] text-3xl md:text-4xl font-bold -mt-6">:</span>
            <div className="flex flex-col items-center">
                <div className="bg-[--primary] text-black text-3xl md:text-5xl font-bold w-20 md:w-24 h-20 md:h-24 rounded-2xl flex items-center justify-center">
                    {String(timeLeft.minutes).padStart(2, '0')}
                </div>
                <span className="text-[--on-surface-variant] text-sm mt-2 font-medium">Menit</span>
            </div>
            <span className="text-[--primary] text-3xl md:text-4xl font-bold -mt-6">:</span>
            <div className="flex flex-col items-center">
                <div className="bg-[--secondary] text-[--primary] text-3xl md:text-5xl font-bold w-20 md:w-24 h-20 md:h-24 rounded-2xl flex items-center justify-center">
                    {String(timeLeft.seconds).padStart(2, '0')}
                </div>
                <span className="text-[--on-surface-variant] text-sm mt-2 font-medium">Detik</span>
            </div>
        </div>
    );
};

export default CountdownTimer;
