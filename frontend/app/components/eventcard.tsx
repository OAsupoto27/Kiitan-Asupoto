import React from 'react';

// Define the structure of the data this card needs
interface EventCardProps {
  month: string;
  day: string;
  title: string;
  organizer: string;
  location: string;
  price: number;
  imageAlt: string;
  imageUrl?: string; // Optional: in case you have a real URL later
}

const EventCard: React.FC<EventCardProps> = ({
  month,
  day,
  title,
  organizer,
  location,
  price,
  imageAlt,
  imageUrl
}) => {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-[0_8px_24px_rgba(15,23,42,0.04)] transition-transform hover:-translate-y-1 duration-300 border border-slate-100 dark:border-slate-800">
      <div className="relative h-56 w-full bg-slate-200 dark:bg-slate-800">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={imageAlt} 
            className="w-full h-full object-cover" 
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-400 p-6 text-center text-xs italic">
            [Image: {imageAlt}]
          </div>
        )}
        

        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-lg text-center shadow-sm">
          <span className="block text-[10px] font-bold text-indigo-600 uppercase tracking-wider">{month}</span>
          <span className="block text-xl font-extrabold text-slate-900 leading-tight">{day}</span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-sans text-[18px] font-bold text-slate-900 dark:text-white mb-1">
          {title}
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-3 font-medium">
          By {organizer}
        </p>

        <div className="flex items-center gap-1.5 text-slate-400 dark:text-slate-500">
          <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-4 h-4"
          >
            <path fillRule= "evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
          </svg>
          <span className="text-xs font-medium truncate">{location}</span>
        </div>

        <div className="mt-5 pt-4 border-t border-slate-50 dark:border-slate-800 flex justify-between items-center">
          <span className="text-xl font-bold text-slate-900 dark:text-white">
            ${price}
            </span>
            <button className="bg-[#3525cd] text-white px-5 py-2 rounded-xl font-bold text-sm hover:bg-[#4d44e3] active:scale-95 transition-all shadow-lg shadow-indigo-500/20">
            Get Tickets
            </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;