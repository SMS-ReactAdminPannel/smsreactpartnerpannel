import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { getAllNotifications } from "./Services";

type MailItem = {
  sender: string;
  title: string;
  preview: string;
  message: string;
  updated_at: string;
  is_read: boolean;
};

export default function GmailStyleInbox() {

  const navigate = useNavigate();
  
  const [selectedMail, setSelectedMail] = useState<MailItem | null>(null);
  const [filter, setFilter] = useState<"all" | "unread" | "read">("all");
  const [mails, setMails] = useState<MailItem[]>([]);

  useEffect(()=>{
    const fetchNotifications = async()=>{
      try{
        const response:any = await getAllNotifications('')
        setMails(response.data.data)
      }catch(error){
        console.log('Error fetching notifications:',error)
      }
    };
    fetchNotifications();
  },[])

  let filteredMails:any;

  if (filter === "all") {
    filteredMails = mails
  } else if (filter === "unread") {
     filteredMails = mails.filter(m=>m.is_read === false)
  }else{
    filteredMails = mails.filter(m=>m.is_read === true)
  }

  return (
    <div className="min-h-screen bg-[#FAF3EB] p-2 font-[Poppins]">
      <div className="flex items-center mb-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-[#9b111e] hover:underline mr-4 pl-2"
        >
          <FaArrowLeft className="mr-1" />
        </button>
        <h1 className="text-3xl font-bold text-[#9b111e]">Notification</h1>
      </div>
      <div className="flex h-[80vh] border rounded-2xl overflow-hidden shadow-lg bg-white">
        {/* Sidebar */}
        <aside className="w-64 border-r bg-[#fdefe9] p-6">
          <h2 className="text-lg font-semibold text-[#9b111e] mb-4">Filters</h2>
          <div className="space-y-3">
            {["all", "unread", "read"].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f as any)}
                className={`block w-full text-left px-4 py-2 rounded-lg transition-all duration-200 ${
                  filter === f
                    ? "bg-gradient-to-r from-red-600 to-red-800 text-white font-semibold shadow-md"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 flex">
          <section className="w-1/2 overflow-y-auto border-r custom-scroll px-4 py-4 space-y-4">
            {filteredMails.map((mail:any,index:number) => (
              <div
                key={index}
                onClick={() => setSelectedMail(mail)}
                className={`cursor-pointer flex items-start gap-4 p-4 rounded-xl hover:bg-blue-50 transition duration-150 ${
                  mail.unread
                    ? "bg-gray-100 font-semibold"
                    : "border border-gray-200"
                }`}
              >
                <div className="p-[1px] rounded-full bg-gradient-to-r from-red-600 to-red-800 inline-block">
                  <div className="w-10 h-10 flex items-center justify-center bg-white text-red-600 rounded-full">
                    {mail.title?.charAt(0).toUpperCase()}
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-[#9b111e]">
                    {mail.title}
                  </p>
                  <p className="text-xs text-gray-600 truncate">
                    {mail.message}
                  </p>
                </div>
              </div>
            ))}
            {filteredMails.length === 0 && (
              <div className="text-center text-gray-400 text-sm mt-20">
                No mails found for this filter.
              </div>
            )}
          </section>

          {/* Mail content */}
          <section className="flex-1 overflow-y-auto px-8 py-6 custom-scroll">
            {selectedMail ? (
              <div>
                <button
                  onClick={() => setSelectedMail(null)}
                  className="text-md text-[#9b111e] hover:underline mb-4 inline-flex items-center"
                >
                  ← Back to list
                </button>

                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {selectedMail.title}
                </h2>

                <div className="flex items-center text-lg text-gray-600 mb-4">
                  
                  <div>
                    <p className="font-semibold text-gray-800 capitalize">
                      {selectedMail.sender}
                    </p>
                    <p className="text-sm text-gray-500">{selectedMail.updated_at}</p>
                  </div>
                </div>

                <hr className="my-4 border-t-1 border-gray-400" />

                <div className="whitespace-pre-wrap text-md leading-relaxed text-gray-800">
                  {selectedMail.message}
                </div>
              </div>
            ) : (
              <div className="h-full flex items-center justify-center text-gray-400 text-sm">
                Select an email to preview
              </div>
            )}
          </section>
        </main>
      </div>
    </div>
  );
}
