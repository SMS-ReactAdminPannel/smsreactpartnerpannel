import { useEffect, useState } from 'react';
import { TiPin } from "react-icons/ti";
import { HiArrowLeft } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';
import Client from '../../api/index.ts'
import { pinnedAnnouncementsAPI } from './services/index.tsx';

const categories = ["All", "general", "booking", "payments"];

type announcement = {
  userId: {
    firstName: string;
    lastName: string;
    image: string;
  };
  subject: string;
  description: string;
  title: string;
  uuid: string;
  _id: string;
  category: string;
  isPinned: boolean;
  createdAt: string;
};

const AnnouncementPages = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [announcements, setAnnouncements] = useState<announcement[]>([]);
  const [pinnedAnnouncements, setPinnedAnnouncements] = useState<announcement[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const response: any = await Client.partner.annoucement.getAll();
        setAnnouncements(response.data.data);
        const pinned = response.data.data.filter((a: announcement) => a.isPinned);
        setPinnedAnnouncements(pinned);
      } catch (error) {
        console.error("Error fetching announcements:", error);
      }
    }
    fetchData();
  }, []);

  const togglePin = async(id: number) => {
    // const partnerId:string | null =localStorage.getItem('adminobjectid')
    // const responce =  await pinnedAnnouncementsAPI(partnerId)
    // console.log(responce)
    const updated = announcements.map((a,index)=>
      index === id ? { ...a, isPinned: !a.isPinned } : a
    );
    setAnnouncements(updated);
  };

  const handlePinnedClick = async (announcement: announcement) => {
    try {
      const res:any = await Client.partner.annoucement.get({ _id: announcement._id });
      console.log("Pinned Announcement Full Data:", res.data);
    } catch (err) {
      console.error("Failed to fetch pinned announcement:", err);
    }
  };

  const filteredAnnouncements =
    selectedCategory === "All"
      ? announcements
      : announcements.filter(a => a.category === selectedCategory);

  return (
    <div className="flex flex-col p-2 bg-gray-50 h-screen">
      <div className='flex flex-row'>
        <button
          onClick={() => navigate(-1)}
          className="text-blue-600 hover:underline mt-3 flex items-center w-fit"
        >
          <HiArrowLeft className="text-3xl text-[#9b111e]" />
        </button>
        <h1 className="text-[#9b111e] font-bold text-center p-4 text-4xl">
          Announcements
        </h1>
      </div>

      <div className="flex gap-4 flex-row mt-3 items-stretch">
      
        <div className="w-1/6 bg-white rounded-xl shadow p-2 flex flex-col">
          <h2 className="text-2xl text-[#9b111e] font-semibold mb-2">Category</h2>
          <ul>
            {categories.map(cat => (
              <li
                key={cat}
                className={`cursor-pointer p-2 rounded ${selectedCategory === cat ? "bg-orange-100 font-bold" : ""}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </li>
            ))}
          </ul>
        </div>

       
        <div className="w-2/4 bg-white rounded-xl shadow p-4 flex flex-col space-y-4">
          {filteredAnnouncements.map((a,index) => (
            <div
              key={a.uuid}
              className="bg-gray-50 p-4 hover:bg-orange-100 rounded-xl shadow relative"
            >
              <div
                className="absolute top-2 right-2 cursor-pointer text-xl text-gray-500 hover:text-red-600"
                onClick={() => togglePin(index)}
                title={a.isPinned ? "Unpin" : "Pin"}
              >
                <TiPin className={a.isPinned ? "rotate-45 text-red-500" : "rotate-0"} />
              </div>
              <div className="flex items-center text-sm text-gray-500 space-x-2">
                <img
                  src={`https://i.pravatar.cc/32?u=${a.userId.firstName}`}
                  alt={a.userId.firstName}
                  className="w-6 h-6 rounded-full"
                />
                <span>{a.userId.firstName + " " + a.userId.lastName} • {a.createdAt}</span>
              </div>
              <h3 className="text-lg font-semibold mt-1">{a.title}</h3>
              <p className="text-gray-700 mt-2">{a.description}</p>
            </div>
          ))}
        </div>

       
        <div className="w-1/3 bg-white rounded-xl shadow p-4 flex flex-col">
          <h2 className="text-2xl font-semibold text-[#9b111e] mb-4 flex items-center gap-1">
            Pinned Announcements
          </h2>
          {pinnedAnnouncements.length === 0 ? (
            <p className="text-gray-500 font-bold text-center p-10">No pinned announcements.</p>
          ) : (
            pinnedAnnouncements.map((a) => (
              <div
                key={a.uuid}
                className="bg-gray-50 p-4 rounded-lg shadow mb-4 relative cursor-pointer"
                onClick={() => handlePinnedClick(a)}
              >
                <div
                  className="absolute top-2 right-2 cursor-pointer text-xl text-gray-500 hover:text-red-600"
                  onClick={(e) => {
                    e.stopPropagation();
                    togglePin(a);
                  }}
                  title="Unpin"
                >
                  <TiPin className="rotate-45 text-red-500" />
                </div>
                <div className="flex items-center text-sm text-gray-500 space-x-2 mb-1">
                  <img
                    src={`https://i.pravatar.cc/32?u=${a.userId.firstName}`}
                    alt={a.userId.firstName}
                    className="w-6 h-6 rounded-full"
                  />
                  <span>{a.userId.firstName + " " + a.userId.lastName} • {a.createdAt}</span>
                </div>
                <h3 className="text-lg font-semibold hover:underline">{a.title}</h3>
                <p className="text-gray-700 mt-2">{a.description}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default AnnouncementPages;
