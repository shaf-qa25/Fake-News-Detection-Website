import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./pages/navbar";
import Home from "./pages/homepage";
import SearchPage from "./pages/Search";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import OAuthRedirect from "./pages/OAuthRedirect";
import BookmarkPage from "./pages/bookmark";
import AboutUs from "./pages/AboutUs";
import FaqPage from "./pages/faq";
import ContactUs from "./pages/contact";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/oauth" element={<OAuthRedirect/>} />
            <Route path="/bookmarks" element={<BookmarkPage/>} />
            <Route path="/aboutus" element = {<AboutUs/>}/>
            <Route path="/faq" element = {<FaqPage/>}/>
            <Route path="/contact" element = {<ContactUs/>}/>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
