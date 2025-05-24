import { useState } from "react";

type Notification = {
  id: number;
  title: string;
  message: string;
  date: string;
  read: boolean;
};

const notifications: Notification[] = [
  {
    id: 1,
    title: "Welcome!",
    message: "Thanks for signing up. We're glad to have you.",
    date: "May 23, 2025",
    read: false,
  },
  {
    id: 2,
    title: "New Feature",
    message: "Check out our new dashboard features.",
    date: "May 22, 2025",
    read: true,
  },
  {
    id: 3,
    title: "Reminder",
    message: "Don't forget to update your profile.",
    date: "May 21, 2025",
    read: false,
  },
];

function NotificationsPage() {
  const [filter, setFilter] = useState<"all" | "read" | "unread">("all");

  const filteredNotifications = notifications.filter((n) => {
    if (filter === "all") return true;
    if (filter === "read") return n.read;
    if (filter === "unread") return !n.read;
  });

  return (
    <div className="bg-white min-h-screen">
      <h2 className="text-4xl font-bold pt-8 pl-12 bg-gradient-to-r from-red-600 to-red-800 text-transparent bg-clip-text">
        Notifications
      </h2>

      <div className="pt-6">
        <div className="w-[90%] mx-auto border-b-2 flex justify-between pb-4">
          <div className="flex flex-row gap-10 cursor-pointer">
            <p
              onClick={() => setFilter("all")}
              className={`text-lg ${
                filter === "all" ? "text-red-800 border-b-2 border-red-800 font-semibold" : "text-gray-600"
              }`}
            >
              All
            </p>
            <p
              onClick={() => setFilter("unread")}
              className={`text-lg ${
                filter === "unread" ? "text-red-800 border-b-2 border-red-800 font-semibold" : "text-gray-600"
              }`}
            >
              Unread
            </p>
            <p
              onClick={() => setFilter("read")}
              className={`text-lg ${
                filter === "read" ? "text-red-800 border-b-2 border-red-800 font-semibold" : "text-gray-600"
              }`}
            >
              Read
            </p>
          </div>
          <button className="text-red-800 text-lg pr-2">
            Mark all as read
          </button>
        </div>

        <div className="w-[90%] mx-auto pt-6 space-y-4">
          {filteredNotifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-4 rounded-lg shadow-md border ${
                notification.read ? "border-gray-100" : "border-red-800"
              }`}
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {notification.title}
              </h3>
              <p className="text-gray-600">{notification.message}</p>
              <p className="text-sm text-gray-400 mt-2">{notification.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NotificationsPage;
