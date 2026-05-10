"use client";
import { useState, useMemo } from 'react';
import Link from 'next/link';
import Footer from '@/app/components/Footer';
import Eventcard from '@/app/components/eventcard';

export default function AllEventsPage() {
  // State for search and filtering
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Technology", "Music", "Business", "Arts"];

  const eventsData = [
    {
      month: "OCT", day: "24", title: "Global AI Summit 2024",
      organizer: "TechNexus Pulse", location: "Innovation Center, San Francisco",
      price: 50, imageAlt: "AI Summit", category: "Technology",
      imageUrl: "https://picsum.photos/seed/ai-summit/800/500"
    },
    {
      month: "OCT", day: "26", title: "Jazz in the Park",
      organizer: "Echo Entertainment", location: "Central Park, New York",
      price: 35, imageAlt: "Jazz concert", category: "Music",
      imageUrl: "https://picsum.photos/seed/jazz-park/800/500"
    },
    {
      month: "OCT", day: "30", title: "Modern Canvas Workshop",
      organizer: "Creative Collective", location: "Art District Studio, Austin",
      price: 120, imageAlt: "Art workshop", category: "Arts",
      imageUrl: "https://picsum.photos/seed/canvas-art/800/500"
    },
    {
      month: "NOV", day: "02", title: "Startup Pitch Night",
      organizer: "VentureHub", location: "Downtown Loft, Chicago",
      price: 20, imageAlt: "Startup pitch", category: "Business",
      imageUrl: "https://picsum.photos/seed/startup-pitch/800/500"
    },
    {
      month: "NOV", day: "05", title: "Web Dev Conference",
      organizer: "CodersUnite", location: "Tech Hub, Seattle",
      price: 75, imageAlt: "Web dev conference", category: "Technology",
      imageUrl: "https://picsum.photos/seed/webdev-conf/800/500"
    },
    {
      month: "NOV", day: "08", title: "R&B Night Live",
      organizer: "SoundWave Events", location: "The Grove, Los Angeles",
      price: 45, imageAlt: "R&B concert", category: "Music",
      imageUrl: "https://picsum.photos/seed/rnb-night/800/500"
    },
    {
      month: "NOV", day: "12", title: "Photography Masterclass",
      organizer: "Lens & Light Studio", location: "Gallery Row, Miami",
      price: 90, imageAlt: "Photography class", category: "Arts",
      imageUrl: "https://picsum.photos/seed/photo-master/800/500"
    },
    {
      month: "NOV", day: "15", title: "Blockchain & Web3 Forum",
      organizer: "CryptoVerse", location: "Fintech Arena, Boston",
      price: 60, imageAlt: "Blockchain forum", category: "Technology",
      imageUrl: "https://picsum.photos/seed/blockchain-web3/800/500"
    },
    {
      month: "NOV", day: "18", title: "Classical Piano Evening",
      organizer: "Harmony Arts", location: "Symphony Hall, Vienna",
      price: 55, imageAlt: "Piano concert", category: "Music",
      imageUrl: "https://picsum.photos/seed/piano-evening/800/500"
    },
    {
      month: "NOV", day: "21", title: "Sculpting for Beginners",
      organizer: "Clay & Form", location: "Maker's Space, Portland",
      price: 80, imageAlt: "Sculpting class", category: "Arts",
      imageUrl: "https://picsum.photos/seed/sculpt-begin/800/500"
    },
    {
      month: "NOV", day: "25", title: "E-Commerce Growth Expo",
      organizer: "BizScale HQ", location: "Convention Center, Dallas",
      price: 40, imageAlt: "Business expo", category: "Business",
      imageUrl: "https://picsum.photos/seed/ecommerce-expo/800/500"
    },
    {
      month: "DEC", day: "01", title: "Indie Music Festival",
      organizer: "Underground Sounds", location: "Riverside Grounds, Nashville",
      price: 65, imageAlt: "Music festival", category: "Music",
      imageUrl: "https://picsum.photos/seed/indie-festival/800/500"
    },
    {
      month: "DEC", day: "05", title: "UX Design Sprint",
      organizer: "DesignLab Co.", location: "Studio One, Toronto",
      price: 95, imageAlt: "UX design", category: "Technology",
      imageUrl: "https://picsum.photos/seed/ux-sprint/800/500"
    },
    {
      month: "DEC", day: "10", title: "Women in Tech Summit",
      organizer: "EmpowerTech", location: "Grand Hall, London",
      price: 30, imageAlt: "Women in tech", category: "Technology",
      imageUrl: "https://picsum.photos/seed/women-tech/800/500"
    },
    {
      month: "DEC", day: "14", title: "Holiday Art Fair",
      organizer: "Winter Gallery", location: "City Center, Denver",
      price: 15, imageAlt: "Art fair", category: "Arts",
      imageUrl: "https://picsum.photos/seed/holiday-art/800/500"
    },
  ];

  // Filtering Logic
  const filteredEvents = useMemo(() => {
    return eventsData.filter((event) => {
      const matchesSearch = 
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.organizer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.location.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = activeCategory === "All" || event.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <div className="flex flex-col min-h-screen bg-[#f7f9fb] font-sans">
      <header className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl shadow-sm">
        <nav className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
          <Link href="/" className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#3525cd] text-2xl">explore</span>
            <span className="text-2xl font-extrabold text-[#3525cd] tracking-tighter">Pulse</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-slate-600 font-semibold hover:text-[#4d44e3] transition-colors">
    Login
  </Link>
  <Link href="/signup" className="bg-[#3525cd] text-white px-5 py-2 rounded-xl font-semibold shadow-lg shadow-indigo-500/20">
    Sign Up
  </Link>
          </div>
        </nav>
      </header>

      <main className="pt-32 pb-20 bg-white flex-1">
        <section className="px-6 max-w-7xl mx-auto">
          <div className="flex flex-col items-center mb-16">
            {/* 119 | Interactive Search Bar */}
            <div className="relative w-full max-w-2xl">
              <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth={2} 
                  stroke="currentColor" 
                  className="w-6 h-6 text-slate-400"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              </div>

              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by title, organizer, or location..."
                className="w-full bg-slate-50 text-slate-900 pl-16 pr-32 py-5 rounded-full text-sm focus:outline-none border border-slate-100 focus:border-[#3525cd]/50 focus:bg-white transition-all placeholder:text-slate-400"
              />
              
              <button className="absolute right-2 top-2 bottom-2 bg-[#3525cd] text-white px-8 rounded-full text-sm font-bold hover:bg-[#4d44e3] transition-colors shadow-lg shadow-indigo-500/20">
                Search
              </button>
            </div>

            {/* 148 | Responsive Category Filters - Only one map block here */}
            <div className="flex flex-wrap justify-center gap-2 mt-8 sm:gap-3">
              {categories.map((cat) => (
                <button 
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-xs font-bold transition-all border ${
                    activeCategory === cat 
                    ? "bg-[#3525cd] text-white border-[#3525cd] shadow-md shadow-indigo-500/20" 
                    : "bg-white text-slate-500 border-slate-100 hover:border-slate-300 hover:text-slate-700"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Results Header */}
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold text-black tracking-tight">
                {/* 188 | Fixed typo here: activeCategory */}
                {activeCategory === "All" ? "All Events" : `${activeCategory} Events`}
              </h2>
              <p className="text-slate-400 text-sm mt-1">
                {filteredEvents.length} {filteredEvents.length === 1 ? 'event' : 'events'} found
              </p>
            </div>
            <Link
              href="/"
              className="text-[#3525cd] font-semibold text-sm hover:underline flex items-center gap-1 group"
            >
              <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Home
            </Link>
          </div>

          {/* Event Grid */}
          {filteredEvents.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event, index) => (
                <Eventcard
                  key={`${event.title}-${index}`}
                  {...event}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h3 className="text-xl font-bold text-slate-900">No events found</h3>
              <p className="text-slate-500">Try adjusting your search or filters.</p>
              <button 
                onClick={() => {setSearchQuery(""); setActiveCategory("All");}}
                className="mt-4 text-[#3525cd] font-bold hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}