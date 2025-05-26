import { useState } from "react";

type MailItem = {
  id: number;
  sender: string;
  subject: string;
  preview: string;
  fullMessage: string;
  time: string;
  unread: boolean;
};

const mails: MailItem[] = [
  {
    id: 1,
    sender: "albert",
    subject: "Help Center",
    preview: "Welcome to Help Center",
    fullMessage:
      "Dear User,\n\nHere is the full message from the help center...",
    time: "Sat, May 24, 2:54 PM",
    unread: false,
  },
  {
    id: 2,
    sender: "leoreddy",
    subject: "New Feature Announcement",
    preview: "We’ve just added new dashboard features...",
    fullMessage:
      "Hi there,\n\nThe dashboard now includes analytics...",
    time: "Fri, May 23, 2:30 PM",
    unread: true,
  },
  {
    id: 3,
    sender: "albert",
    subject: "Help Center",
    preview: "Welcome to Help Center",
    fullMessage:
      "Dear User,\n\nHere is another copy of the Help Center message...",
    time: "Tue, Feb 4, 10:03 AM",
    unread: true,
  },
];

export default function GmailStyleInbox() {
  const [selectedMail, setSelectedMail] = useState<MailItem | null>(null);
  const [filter, setFilter] = useState<"all" | "unread" | "read">("all");

  const filteredMails = mails.filter((m) =>
    filter === "all" ? true : filter === "unread" ? m.unread : !m.unread
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Page title */}
      <h1 className="text-3xl font-bold text-[#9b111e] mb-6">Notification</h1>

      {/* Bordered inbox area */}
      <div className="flex h-[80vh] border rounded-lg overflow-hidden shadow bg-white">
        {/* Sidebar */}
        <aside className="w-60 border-r bg-gray-50 p-4">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Filters</h2>
          <div className="space-y-2">
            {["all", "unread", "read"].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f as any)}
                className={`block w-full text-left px-3 py-2 rounded-md transition ${filter === f
                  ? "bg-blue-100 text-blue-700 font-medium"
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
          {/* Mail list */}
          <section className="w-1/2 overflow-y-auto border-r">
            {filteredMails.map((mail) => (
              <div
                key={mail.id}
                onClick={() => setSelectedMail(mail)}
                className={`cursor-pointer flex items-start gap-3 p-4 hover:bg-gray-50 transition ${mail.unread ? "bg-blue-50 font-semibold" : ""
                  }`}
              >
                <div className="w-10 h-10 bg-blue-200 text-blue-800 rounded-full flex items-center justify-center text-sm font-bold">
                  {mail.sender[0].toUpperCase()}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">{mail.sender}</span>
                    <span className="text-xs text-gray-500">{mail.time}</span>
                  </div>
                  <p className="text-sm">{mail.subject}</p>
                  <p className="text-xs text-gray-600 truncate">{mail.preview}</p>
                </div>
              </div>
            ))}
          </section>

          {/* Mail content */}
          <section className="flex-1 overflow-y-auto p-6">
            {selectedMail ? (
              <>
                <button
                  onClick={() => setSelectedMail(null)}
                  className="text-blue-600 text-sm mb-4 hover:underline"
                >
                  ← Back to list
                </button>
                <h2 className="text-xl font-bold mb-2">{selectedMail.subject}</h2>
                <p className="text-sm text-gray-600 mb-4">
                  From: {selectedMail.sender} • {selectedMail.time}
                </p>
                <pre className="whitespace-pre-wrap text-gray-800 text-sm leading-relaxed">
                  {selectedMail.fullMessage}
                </pre>
              </>
            ) : (
              <div className="text-gray-400 text-sm flex items-center justify-center h-full">
                Select an email to preview
              </div>
            )}
          </section>
        </main>
      </div>
    </div>
  );
}
