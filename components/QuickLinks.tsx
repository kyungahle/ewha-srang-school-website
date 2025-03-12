"use client";

import { Youtube, UtensilsCrossed, Bus, Bell, Calendar, Instagram, Book, Library } from "lucide-react";
import Link from "next/link";

const quickLinks = [
  {
    title: "School YouTube",
    icon: <Youtube className="h-8 w-8 text-red-500" />,
    href: "https://www.youtube.com/watch?v=XiXG75QCRdo",
  },
  {
    title: "School Meals",
    icon: <UtensilsCrossed className="h-8 w-8 text-orange-500" />,
    href: "/meal",
  },
  {
    title: "Bus Schedule",
    icon: <Bus className="h-8 w-8 text-blue-500" />,
    href: "https://maps.app.goo.gl/v25TJ4kSKrEch4mB7",
  },
  {
    title: "Notifications",
    icon: <Bell className="h-8 w-8 text-yellow-500" />,
    href: "/notice",
  },
  {
    title: "Academic Calendar",
    icon: <Calendar className="h-8 w-8 text-emerald-500" />,
    href: "https://calendar.google.com/calendar/u/0/r?pli=1",
  },
  {
    title: "Instagram\nEwha Srang Channel",
    icon: <Instagram className="h-8 w-8 text-purple-500" />,
    href: "/instagram",
  },
  {
    title: "Daily Bible Verse",
    icon: <Book className="h-8 w-8 text-indigo-500" />,
    href: "http://www.holybible.or.kr/B_NIV/cgi/bibleftxt.php?VR=NIV&VL=40&CN=1&CV=99",
  },
  {
    title: "Library",
    icon: <Library className="h-8 w-8 text-rose-500" />,
    href: "/library",
  },
];

export function QuickLinks() {
  const topRow = quickLinks.slice(0, 4);
  const bottomRow = quickLinks.slice(4);

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col gap-4">
      <div className="grid grid-cols-4 gap-3">
        {topRow.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            className="bg-[rgb(27,71,45)]/10 border border-[rgb(27,71,45)] text-[rgb(27,71,45)] rounded-lg p-3 flex flex-col items-center justify-center transition-all duration-200 hover:scale-105 hover:bg-[rgb(27,71,45)]/20 shadow-sm min-h-[90px] group"
          >
            <div className="transform transition-transform duration-200 group-hover:scale-110">
              {link.icon}
            </div>
            <span className="mt-2 text-center font-medium text-sm">{link.title}</span>
          </Link>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-3">
        {bottomRow.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            className="bg-[rgb(27,71,45)]/10 border border-[rgb(27,71,45)] text-[rgb(27,71,45)] rounded-lg p-3 flex flex-col items-center justify-center transition-all duration-200 hover:scale-105 hover:bg-[rgb(27,71,45)]/20 shadow-sm min-h-[90px] group"
          >
            <div className="transform transition-transform duration-200 group-hover:scale-110">
              {link.icon}
            </div>
            <span className="mt-2 text-center font-medium text-sm">{link.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
} 