import React, { useState, useEffect } from "react";
import VernisLogo from "./VernisLogo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    window.location.href = "/login"; // or "/" if you want to redirect home
  };

  return (
    <nav
      className="text-white shadow-md"
      style={{
        background:
          "linear-gradient(227.42deg, #072B61 30.77%, #0E58C7 86.56%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <VernisLogo size={48} />
            <span className="text-xl font-semibold tracking-wide">Vernis</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8">
            <a href="/" className="hover:text-blue-200 transition-colors">Home</a>
            <a href="/search" className="hover:text-blue-200 transition-colors">Search</a>
            <a href="/bookmarks" className="hover:text-blue-200 transition-colors">Bookmarks</a>

            {!isLoggedIn && (
              <>
                <a href="/login" className="hover:text-blue-200 transition-colors">Login</a>
                <a href="/signup" className="hover:text-blue-200 transition-colors">SignUp</a>
              </>
            )}

            {isLoggedIn && (
              <button
                onClick={handleLogout}
                className="bg-white text-blue-700 font-semibold px-4 py-2 rounded-xl hover:bg-blue-100 transition-all"
              >
                Logout
              </button>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-2xl focus:outline-none"
            >
              {isOpen ? "✖️" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0E58C7]/95 backdrop-blur-md">
          <div className="px-4 pt-2 pb-3 space-y-2">
            <a href="/" className="block px-3 py-2 rounded-md hover:bg-blue-800 transition-colors">Home</a>
            <a href="/search" className="block px-3 py-2 rounded-md hover:bg-blue-800 transition-colors">Search</a>
            <a href="/bookmarks" className="block px-3 py-2 rounded-md hover:bg-blue-800 transition-colors">Bookmarks</a>

            {!isLoggedIn && (
              <>
                <a href="/login" className="block px-3 py-2 rounded-md hover:bg-blue-800 transition-colors">Login</a>
                <a href="/signup" className="block px-3 py-2 rounded-md hover:bg-blue-800 transition-colors">SignUp</a>
              </>
            )}

            {isLoggedIn && (
              <button
                onClick={handleLogout}
                className="w-full bg-white text-blue-700 font-semibold px-4 py-2 rounded-xl hover:bg-blue-100 transition-all"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
