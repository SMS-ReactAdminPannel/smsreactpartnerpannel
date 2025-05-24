import  { useState } from 'react';
import { TiPin } from "react-icons/ti";

const categories = [
  "All", "General", "Booking", "SOS Updates", "Payments",
];

const initialAnnouncements = [
  {
    id: 1,
    title: "Welcome to Tiimi People",
    content: "We're thrilled to share some exciting updates with you!",
    author: "albert",
    category: "General",
    date: "May 19, 07:00 pm",
    reactions: 12,
    comments: 2,
    shares: 1,
    isPinned: true
  },
  {
    id: 2,
    title: "SOP Updates",
    content: "We've been hard at work refining our SOPs to make them even more user-friendly!",
    author: "suba reddy",
    category: "SOS Updates",
    date: "May 16, 09:00 pm",
    reactions: 5,
    comments: 1,
    shares: 0,
    isPinned: false
  },
  {
    id: 3,
    title: "More SOP Changes",
    content: "Our latest SOP updates include feedback from the community.",
    author: "suba reddy",
    category: "SOS Updates",
    date: "May 22, 06:00 pm",
    reactions: 5,
    comments: 1,
    shares: 0,
    isPinned: false
  },
];

const AnnouncementPages = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [announcements, setAnnouncements] = useState(initialAnnouncements);

  const togglePin = (id:number) => {
    const updated = announcements.map(a =>
      a.id === id ? { ...a, isPinned: !a.isPinned } : a
    );
    setAnnouncements(updated);
  };

  const filteredAnnouncements = selectedCategory === "All"
    ? announcements
    : announcements.filter(a => a.category === selectedCategory);

  const pinnedAnnouncements = announcements.filter(a => a.isPinned);

  return (
    <div className="flex flex-col p-4 space-x-4 bg-gray-50 min-h-screen">
      <h1 className='text-[#9b111e] font-bold text-4xl'>Announcements</h1>
      <div className='flex gap-4 flex-row mt-10'>
        
        
        <div className="w-1/6 bg-white rounded-xl shadow p-4">
          <h2 className="text-2xl font-semibold mb-2">Category</h2>
          <ul>
            {categories.map(cat => (
              <li
                key={cat}
                className={`cursor-pointer p-2 rounded ${selectedCategory === cat ? "bg-blue-100 font-bold" : ""}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </li>
            ))}
          </ul>
        </div>

        
        <div className="w-2/4 space-y-4">
          {filteredAnnouncements.map(a => (
            <div key={a.id} className="bg-white p-4 rounded-xl shadow relative">
              <div
                className="absolute top-2 right-2 cursor-pointer text-xl text-gray-500 hover:text-red-600"
                onClick={() => togglePin(a.id)}
                title={a.isPinned ? "Unpin" : "Pin"}
              >
                <TiPin className={a.isPinned ? "rotate-45 text-red-500" : "rotate-0"} />
              </div>
              <div className="flex items-center text-sm text-gray-500 space-x-2">
                <img
                  src={`https://i.pravatar.cc/32?u=${a.author}`}
                  alt={a.author}
                  className="w-6 h-6 rounded-full"
                />
                <span>{a.author} • {a.date}</span>
              </div>
              <h3 className="text-lg font-semibold mt-1">{a.title}</h3>
              <p className="text-gray-700 mt-2">{a.content}</p>
            </div>
          ))}
        </div>

     
        <div className="w-1/3 bg-white rounded-xl shadow p-4">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-1">
            Pinned Announcements
          </h2>
          {pinnedAnnouncements.length === 0 ? (
            <p className="text-gray-500">No pinned announcements.</p>
          ) : (
            pinnedAnnouncements.map(a => (
              <div key={a.id} className="bg-gray-50 p-4 rounded-lg shadow mb-4 relative">
                <div
                  className="absolute top-2 right-2 cursor-pointer text-xl text-gray-500 hover:text-red-600"
                  onClick={() => togglePin(a.id)}
                  title="Unpin"
                >
                  <TiPin className="rotate-45 text-red-500" />
                </div>
                <div className="flex items-center text-sm text-gray-500 space-x-2 mb-1">
                  <img
                    src={`https://i.pravatar.cc/32?u=${a.author}`}
                    alt={a.author}
                    className="w-6 h-6 rounded-full"
                  />
                  <span>{a.author} • {a.date}</span>
                </div>
                <h3 className="text-lg font-semibold">{a.title}</h3>
                <p className="text-gray-700 mt-2">{a.content}</p>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
};

export default AnnouncementPages;
