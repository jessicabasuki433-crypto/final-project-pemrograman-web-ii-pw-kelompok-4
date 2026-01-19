'use client';

import { useState } from 'react';
import { events } from '@/data/events';

const Calendar = ({ onDateSelect }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const monthNames = [
    'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
  ];

  const dayNames = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();

    const days = [];

    for (let i = 0; i < startingDay; i++) {
      const prevDate = new Date(year, month, -startingDay + i + 1);
      days.push({ date: prevDate, isCurrentMonth: false });
    }

    for (let i = 1; i <= daysInMonth; i++) {
      days.push({ date: new Date(year, month, i), isCurrentMonth: true });
    }

    const remainingDays = 42 - days.length;
    for (let i = 1; i <= remainingDays; i++) {
      days.push({ date: new Date(year, month + 1, i), isCurrentMonth: false });
    }

    return days;
  };

  const getEventsForDate = (date) => {
    return events.filter(event => {
      const eventDate = new Date(event.date);
      return eventDate.toDateString() === date.toDateString();
    });
  };

  const navigateMonth = (direction) => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + direction, 1));
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
    if (onDateSelect) {
      onDateSelect(date, getEventsForDate(date));
    }
  };

  const isToday = (date) => {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  const days = getDaysInMonth(currentDate);

  return (
    <div className="bg-[--surface] rounded-2xl border border-[--outline-variant] overflow-hidden">
      {/* Calendar Header */}
      <div className="flex items-center justify-between p-4 bg-[--surface-variant]/30">
        <button
          onClick={() => navigateMonth(-1)}
          className="w-8 h-8 rounded-full hover:bg-[--surface-variant] flex items-center justify-center transition-colors text-[--on-surface-variant]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h3 className="title-medium font-bold text-[--on-surface]">
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h3>
        <button
          onClick={() => navigateMonth(1)}
          className="w-8 h-8 rounded-full hover:bg-[--surface-variant] flex items-center justify-center transition-colors text-[--on-surface-variant]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="p-4">
        {/* Day Names */}
        <div className="grid grid-cols-7 mb-2">
          {dayNames.map((day) => (
            <div key={day} className="text-center text-xs font-medium text-[--on-surface-variant] py-1">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Days */}
        <div className="grid grid-cols-7 gap-1">
          {days.map((day, index) => {
            const dayEvents = getEventsForDate(day.date);
            const hasEvents = dayEvents.length > 0;
            const isSelected = selectedDate && day.date.toDateString() === selectedDate.toDateString();

            return (
              <button
                key={index}
                onClick={() => handleDateClick(day.date)}
                className={`
                  relative aspect-square flex items-center justify-center text-sm rounded-full transition-all
                  ${!day.isCurrentMonth ? 'text-[--outline-variant]' : 'text-[--on-surface]'}
                  ${isToday(day.date) && !isSelected ? 'text-[--primary] font-bold border border-[--primary]' : ''}
                  ${isSelected ? 'bg-[--primary] text-[--on-primary] shadow-sm' : 'hover:bg-[--surface-variant]'}
                `}
              >
                <span>{day.date.getDate()}</span>
                {hasEvents && day.isCurrentMonth && !isSelected && (
                  <div className="absolute bottom-1 w-1 h-1 rounded-full bg-[--secondary]" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
