import { Navigation } from "@/components/Navigation";
import { HeroCarousel } from "@/components/HeroCarousel";
import { QuickLinks } from "@/components/QuickLinks";
import { Newspaper, FileText, Calendar } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[rgb(27,71,45)]/5">
      <Navigation />
      
      {/* Hero Section */}
      <HeroCarousel />

      {/* Quick Links and News Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Quick Links */}
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold text-[rgb(27,71,45)] mb-6 text-center">Quick Links</h2>
            <div className="flex justify-center">
              <QuickLinks />
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px bg-[rgb(27,71,45)]/20 mx-4"></div>

          {/* School News */}
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold text-[rgb(27,71,45)] mb-6 text-center">School News</h2>
            <div className="space-y-2">
              <div className="p-3 hover:bg-[rgb(27,71,45)]/5 rounded-lg transition-colors">
                <div className="flex items-center gap-2">
                  <Newspaper className="h-6 w-6 text-[rgb(27,71,45)]" />
                  <h3 className="text-lg font-semibold text-[rgb(27,71,45)]">Recent News</h3>
                </div>
                <p className="text-gray-600 mt-1 ml-8">Check the latest news and event announcements.</p>
              </div>
              <div className="p-3 hover:bg-[rgb(27,71,45)]/5 rounded-lg transition-colors">
                <div className="flex items-center gap-2">
                  <FileText className="h-6 w-6 text-[rgb(27,71,45)]" />
                  <h3 className="text-lg font-semibold text-[rgb(27,71,45)]">School Letters</h3>
                </div>
                <p className="text-gray-600 mt-1 ml-8">View important school letters and announcements.</p>
              </div>
              <div className="p-3 hover:bg-[rgb(27,71,45)]/5 rounded-lg transition-colors">
                <div className="flex items-center gap-2">
                  <Calendar className="h-6 w-6 text-[rgb(27,71,45)]" />
                  <h3 className="text-lg font-semibold text-[rgb(27,71,45)]">School Events</h3>
                </div>
                <p className="text-gray-600 mt-1 ml-8">Check upcoming school events and schedules.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[rgb(27,71,45)] text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-xl font-semibold">Ewha Srang School</div>
            <div className="text-sm text-right">
              Ewha Srang School, TropeangThmor village, Srang Commune,<br />
              Kongpisey District, KampongSpeu Province, CAMBODIA
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
