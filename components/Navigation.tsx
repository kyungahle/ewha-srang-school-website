"use client";

import Link from "next/link";
import Image from "next/image";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginPanel, setShowLoginPanel] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!isLoggedIn) {
      setShowLoginPanel(true);
    } else {
      setIsLoggedIn(false);
      setShowLoginPanel(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 실제 로그인 로직은 여기에 구현
    if (username && password) {
      setIsLoggedIn(true);
      setShowLoginPanel(false);
      setUsername("");
      setPassword("");
    }
  };

  return (
    <nav className="bg-white border-b relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo and School Name */}
          <div className="flex items-center space-x-4 mr-8">
            <Image
              src="/images/logo.png"
              alt="Ewha Srang School Logo"
              width={50}
              height={50}
              className="object-contain"
            />
            <span className="text-[rgb(27,71,45)] text-xl font-semibold">Ewha Srang School</span>
          </div>

          {/* Navigation Menu */}
          <NavigationMenu>
            <NavigationMenuList className="space-x-1">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-[rgb(27,71,45)] hover:text-[rgb(39,103,65)] data-[state=open]:bg-transparent">
                  About
                </NavigationMenuTrigger>
                <NavigationMenuContent className="data-[motion=from-start]:animate-none data-[motion=to-start]:animate-none absolute left-0">
                  <div className="bg-white p-4 w-[200px]">
                    <ul className="space-y-2">
                      <li><Link href="/about/mission" className="block text-[rgb(27,71,45)] hover:text-[rgb(39,103,65)]">Mission & Vision</Link></li>
                      <li><Link href="/about/history" className="block text-[rgb(27,71,45)] hover:text-[rgb(39,103,65)]">History</Link></li>
                      <li><Link href="/about/facilities" className="block text-[rgb(27,71,45)] hover:text-[rgb(39,103,65)]">Facilities</Link></li>
                    </ul>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-[rgb(27,71,45)] hover:text-[rgb(39,103,65)] data-[state=open]:bg-transparent">
                  Curriculum
                </NavigationMenuTrigger>
                <NavigationMenuContent className="data-[motion=from-start]:animate-none data-[motion=to-start]:animate-none absolute left-0">
                  <div className="bg-white p-4 w-[200px]">
                    <ul className="space-y-2">
                      <li><Link href="/curriculum/overview" className="block text-[rgb(27,71,45)] hover:text-[rgb(39,103,65)]">Overview</Link></li>
                      <li><Link href="/curriculum/subjects" className="block text-[rgb(27,71,45)] hover:text-[rgb(39,103,65)]">Subjects</Link></li>
                      <li><Link href="/curriculum/special" className="block text-[rgb(27,71,45)] hover:text-[rgb(39,103,65)]">Special Programs</Link></li>
                    </ul>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-[rgb(27,71,45)] hover:text-[rgb(39,103,65)] data-[state=open]:bg-transparent">
                  School Life
                </NavigationMenuTrigger>
                <NavigationMenuContent className="data-[motion=from-start]:animate-none data-[motion=to-start]:animate-none absolute left-0">
                  <div className="bg-white p-4 w-[200px]">
                    <ul className="space-y-2">
                      <li><Link href="/school-life/events" className="block text-[rgb(27,71,45)] hover:text-[rgb(39,103,65)]">Events</Link></li>
                      <li><Link href="/school-life/clubs" className="block text-[rgb(27,71,45)] hover:text-[rgb(39,103,65)]">Clubs</Link></li>
                      <li><Link href="/school-life/gallery" className="block text-[rgb(27,71,45)] hover:text-[rgb(39,103,65)]">Gallery</Link></li>
                    </ul>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                {isLoggedIn ? (
                  <>
                    <NavigationMenuTrigger className="text-[rgb(27,71,45)] hover:text-[rgb(39,103,65)] data-[state=open]:bg-transparent">
                      Classes
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="data-[motion=from-start]:animate-none data-[motion=to-start]:animate-none absolute left-1/2 -translate-x-1/2 w-screen">
                      <div className="bg-white">
                        <div className="max-w-7xl mx-auto">
                          <ul className="grid w-full gap-6 py-6 px-8">
                            <li>
                              <h3 className="font-semibold mb-3 text-lg text-[rgb(27,71,45)]">Kindergarten</h3>
                              <div className="grid grid-cols-2 gap-4">
                                <Link href="/classes/k1" className="flex items-center justify-center px-4 py-3 bg-white border border-[rgb(27,71,45)] rounded-lg text-[rgb(27,71,45)] hover:bg-[rgb(27,71,45)] hover:text-white transition-colors">K1</Link>
                                <Link href="/classes/k2" className="flex items-center justify-center px-4 py-3 bg-white border border-[rgb(27,71,45)] rounded-lg text-[rgb(27,71,45)] hover:bg-[rgb(27,71,45)] hover:text-white transition-colors">K2</Link>
                              </div>
                            </li>
                            <li>
                              <h3 className="font-semibold mb-3 text-lg text-[rgb(27,71,45)]">Elementary School</h3>
                              <div className="grid grid-cols-3 gap-4">
                                <Link href="/classes/e1" className="flex items-center justify-center px-4 py-3 bg-white border border-[rgb(27,71,45)] rounded-lg text-[rgb(27,71,45)] hover:bg-[rgb(27,71,45)] hover:text-white transition-colors">1</Link>
                                <Link href="/classes/e2" className="flex items-center justify-center px-4 py-3 bg-white border border-[rgb(27,71,45)] rounded-lg text-[rgb(27,71,45)] hover:bg-[rgb(27,71,45)] hover:text-white transition-colors">2</Link>
                                <Link href="/classes/e3" className="flex items-center justify-center px-4 py-3 bg-white border border-[rgb(27,71,45)] rounded-lg text-[rgb(27,71,45)] hover:bg-[rgb(27,71,45)] hover:text-white transition-colors">3</Link>
                                <Link href="/classes/e4" className="flex items-center justify-center px-4 py-3 bg-white border border-[rgb(27,71,45)] rounded-lg text-[rgb(27,71,45)] hover:bg-[rgb(27,71,45)] hover:text-white transition-colors">4</Link>
                                <Link href="/classes/e5" className="flex items-center justify-center px-4 py-3 bg-white border border-[rgb(27,71,45)] rounded-lg text-[rgb(27,71,45)] hover:bg-[rgb(27,71,45)] hover:text-white transition-colors">5</Link>
                                <Link href="/classes/e6" className="flex items-center justify-center px-4 py-3 bg-white border border-[rgb(27,71,45)] rounded-lg text-[rgb(27,71,45)] hover:bg-[rgb(27,71,45)] hover:text-white transition-colors">6</Link>
                              </div>
                            </li>
                            <li>
                              <h3 className="font-semibold mb-3 text-lg text-[rgb(27,71,45)]">Middle School</h3>
                              <div className="grid grid-cols-3 gap-4">
                                <Link href="/classes/m1" className="flex items-center justify-center px-4 py-3 bg-white border border-[rgb(27,71,45)] rounded-lg text-[rgb(27,71,45)] hover:bg-[rgb(27,71,45)] hover:text-white transition-colors">7</Link>
                                <Link href="/classes/m2" className="flex items-center justify-center px-4 py-3 bg-white border border-[rgb(27,71,45)] rounded-lg text-[rgb(27,71,45)] hover:bg-[rgb(27,71,45)] hover:text-white transition-colors">8</Link>
                                <Link href="/classes/m3" className="flex items-center justify-center px-4 py-3 bg-white border border-[rgb(27,71,45)] rounded-lg text-[rgb(27,71,45)] hover:bg-[rgb(27,71,45)] hover:text-white transition-colors">9</Link>
                              </div>
                            </li>
                            <li>
                              <h3 className="font-semibold mb-3 text-lg text-[rgb(27,71,45)]">High School</h3>
                              <div className="grid grid-cols-3 gap-4">
                                <Link href="/classes/h1" className="flex items-center justify-center px-4 py-3 bg-white border border-[rgb(27,71,45)] rounded-lg text-[rgb(27,71,45)] hover:bg-[rgb(27,71,45)] hover:text-white transition-colors">10</Link>
                                <Link href="/classes/h2" className="flex items-center justify-center px-4 py-3 bg-white border border-[rgb(27,71,45)] rounded-lg text-[rgb(27,71,45)] hover:bg-[rgb(27,71,45)] hover:text-white transition-colors">11</Link>
                                <Link href="/classes/h3" className="flex items-center justify-center px-4 py-3 bg-white border border-[rgb(27,71,45)] rounded-lg text-[rgb(27,71,45)] hover:bg-[rgb(27,71,45)] hover:text-white transition-colors">12</Link>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <NavigationMenuTrigger className="text-gray-400 cursor-not-allowed">
                    Classes
                  </NavigationMenuTrigger>
                )}
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-[rgb(27,71,45)] hover:text-[rgb(39,103,65)] data-[state=open]:bg-transparent">
                  After School
                </NavigationMenuTrigger>
                <NavigationMenuContent className="data-[motion=from-start]:animate-none data-[motion=to-start]:animate-none absolute left-0">
                  <div className="bg-white p-4 w-[200px]">
                    <ul className="space-y-2">
                      <li><Link href="/after-school/sports" className="block text-[rgb(27,71,45)] hover:text-[rgb(39,103,65)]">Sports</Link></li>
                      <li><Link href="/after-school/arts" className="block text-[rgb(27,71,45)] hover:text-[rgb(39,103,65)]">Arts</Link></li>
                      <li><Link href="/after-school/academic" className="block text-[rgb(27,71,45)] hover:text-[rgb(39,103,65)]">Academic</Link></li>
                    </ul>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-[rgb(27,71,45)] hover:text-[rgb(39,103,65)] data-[state=open]:bg-transparent">
                  Forms
                </NavigationMenuTrigger>
                <NavigationMenuContent className="data-[motion=from-start]:animate-none data-[motion=to-start]:animate-none absolute left-0">
                  <div className="bg-white p-4 w-[200px]">
                    <ul className="space-y-2">
                      <li><Link href="/forms/admission" className="block text-[rgb(27,71,45)] hover:text-[rgb(39,103,65)]">Admission</Link></li>
                      <li><Link href="/forms/scholarship" className="block text-[rgb(27,71,45)] hover:text-[rgb(39,103,65)]">Scholarship</Link></li>
                      <li><Link href="/forms/general" className="block text-[rgb(27,71,45)] hover:text-[rgb(39,103,65)]">General Forms</Link></li>
                    </ul>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-[rgb(27,71,45)] hover:text-[rgb(39,103,65)] data-[state=open]:bg-transparent">
                  Notices
                </NavigationMenuTrigger>
                <NavigationMenuContent className="data-[motion=from-start]:animate-none data-[motion=to-start]:animate-none absolute left-0">
                  <div className="bg-white p-4 w-[200px]">
                    <ul className="space-y-2">
                      <li><Link href="/notices/news" className="block text-[rgb(27,71,45)] hover:text-[rgb(39,103,65)]">News</Link></li>
                      <li><Link href="/notices/announcements" className="block text-[rgb(27,71,45)] hover:text-[rgb(39,103,65)]">Announcements</Link></li>
                      <li><Link href="/notices/calendar" className="block text-[rgb(27,71,45)] hover:text-[rgb(39,103,65)]">Calendar</Link></li>
                    </ul>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Login Button */}
          <Button 
            onClick={handleLogin}
            className="bg-[rgb(27,71,45)] text-white hover:bg-[rgb(39,103,65)]"
          >
            {isLoggedIn ? 'Logout' : 'Login'}
          </Button>

          {/* Login Panel */}
          {showLoginPanel && (
            <div className="absolute right-4 top-24 bg-white p-6 rounded-lg shadow-xl w-[300px] z-50 border border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-[rgb(27,71,45)]">Login</h3>
                <button 
                  onClick={() => setShowLoginPanel(false)} 
                  className="text-gray-500 hover:text-gray-700 p-1 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="username" className="block text-sm font-medium text-[rgb(27,71,45)] mb-1">
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[rgb(27,71,45)]"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-[rgb(27,71,45)] mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[rgb(27,71,45)]"
                    required
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-[rgb(27,71,45)] text-white hover:bg-[rgb(39,103,65)] transition-colors"
                >
                  Sign In
                </Button>
              </form>
            </div>
          )}

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/about" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">
              About
            </Link>
            <Link href="/curriculum" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">
              Curriculum
            </Link>
            <Link href="/school-life" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">
              School Life
            </Link>
            <Link href="/forms" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">
              Forms
            </Link>
            <Link href="/notices" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">
              Notices
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
} 