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
      "Dear User,\n\nHere is the full message from the help center. It includes detailed guidance on importing React components, managing state, and more...\n\nBest regards,\nHelp Center Team",
    time: "Sat, May 24, 2:54 PM",
    unread: true,
  },
  {
    id: 2,
    sender: "leoreddy",
    subject: "New Feature Announcement",
    preview: "We’ve just added new dashboard features...",
    fullMessage:
      "Hi there,\n\nThe dashboard now includes analytics, customizable widgets, and faster performance. Visit the updates page for more details.\n\nCheers,\nThe Product Team",
    time: "Fri, May 23, 2:30 PM",
    unread: true,
  },
  {
    id: 3,
    sender: "albert",
    subject: "Help Center",
    preview: "Welcome to Help Center",
    fullMessage:
      "Dear User,\n\nHere is another copy of the Help Center message. It includes detailed guidance on importing React components, managing state, and more...\n\nThanks,\nSupport Team",
    time: "Tue, Feb 4, 10:03 AM",
    unread: true,
  },
];

export default function MailNotifications() {
  const [selectedMail, setSelectedMail] = useState<MailItem | null>(null);
  const [filter, setFilter] = useState<"all" | "unread" | "read">("all");

  const filtered = mails.filter((m) =>
    filter === "all" ? true : filter === "unread" ? m.unread : !m.unread
  );

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl text-[#9b111e] font-bold mb-4">Notifications</h1>

      {!selectedMail ? (
        <>
          <div className="flex gap-6 border-b pb-2 mb-4">
            {["all", "unread", "read"].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f as any)}
                className={`capitalize text-lg ${
                  filter === f
                    ? "text-blue-700 font-semibold border-b-2 border-blue-700"
                    : "text-gray-600"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-md shadow divide-y">
            {filtered.map((mail) => (
              <div
                key={mail.id}
                onClick={() => setSelectedMail(mail)}
                className="cursor-pointer flex justify-between p-4 hover:bg-gray-50"
              >
                <div className="flex flex-col text-gray-700">
                  <p className="text-sm">{mail.sender}</p>
                  <p className="font-semibold">{mail.subject}</p>
                </div>
                <span className="text-xs text-gray-400">{mail.time}</span>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="bg-white rounded-md shadow p-6">
          <button
            onClick={() => setSelectedMail(null)}
            className="text-blue-600 text-sm mb-4"
          >
            ← Back
          </button>
          <div className="mb-4 border-b pb-2">
            <p className="text-sm text-gray-500">
              <strong>From:</strong> {selectedMail.sender}
            </p>
            <p className="text-sm text-gray-500">
              <strong>Subject:</strong> {selectedMail.subject}
            </p>
            <p className="text-xs text-gray-400">
              <strong>Date:</strong> {selectedMail.time}
            </p>
          </div>
          <pre className="text-gray-700 whitespace-pre-wrap">{selectedMail.fullMessage}</pre>
        </div>
      )}
    </div>
  );
}
