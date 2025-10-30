import React from "react";
import VernisLogo from "./VernisLogo";



const GlobeIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="M12 2a14.5 14.5 0 0 0 0 20M2 12h20"/>
  </svg>
);

const XSocialIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6 6 18"/>
    <path d="m6 6 12 12"/>
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const InstagramIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const ComplexFooter = () => {
  const footerStyle = {
    background: "linear-gradient(180deg, #0E58C7 10.58%, #0B4295 35.58%, #072B61 74.04%)",
    color: "white",
  };

  const socialIcons = [
    { icon: GlobeIcon, link: "#", label: "Website" },
    { icon: XSocialIcon, link: "#", label: "X (Twitter)" },
    { icon: LinkedinIcon, link: "#", label: "LinkedIn" },
    { icon: InstagramIcon, link: "#", label: "Instagram" },
  ];

  const LinkItem = ({ href, children }) => (
    <li>
      <a
        href={href}
        className="cursor-pointer hover:text-yellow-300 transition-colors duration-200 text-sm"
      >
        {children}
      </a>
    </li>
  );

  return (
    <footer className="py-8 px-6 sm:py-10" style={footerStyle}>
      <div className="max-w-7xl mx-auto">
      
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 sm:gap-10 border-b border-white/10 pb-8 sm:pb-10">
      
          <div className="flex flex-col space-y-2 sm:space-y-4 col-span-1 lg:col-span-1">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/70 rounded-full mb-2 sm:mb-4 flex items-center justify-center">
              <VernisLogo className="h-8 w-8 sm:h-10 sm:w-10 text-indigo-600" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">Vernis</h2>
          </div>

        
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 text-amber-400">Company</h3>
            <ul className="space-y-2 sm:space-y-3 text-white/90">
              <LinkItem href="/aboutus">About us</LinkItem>
              <LinkItem href="/faq">FAQ'S</LinkItem>
              <LinkItem href="/contact">Contact us</LinkItem>
            </ul>
          </div>

        
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 text-amber-400">Navigation</h3>
            <ul className="space-y-2 sm:space-y-3 text-white/90">
              <LinkItem href="/">Home</LinkItem>
              <LinkItem href="/search">Search</LinkItem>
            </ul>
          </div>

   
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 text-amber-400">Sections</h3>
            <ul className="space-y-2 sm:space-y-3 text-white/90">
              <LinkItem href="/">Trending</LinkItem>
              <LinkItem href="/bookmark">Bookmark</LinkItem>
            </ul>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 text-amber-400">Account</h3>
            <ul className="space-y-2 sm:space-y-3 text-white/90">
              <LinkItem href="/login">Login</LinkItem>
              <LinkItem href="/signup">Sign up</LinkItem>
            </ul>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:justify-between items-center">
          <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-6">
            <div className="flex space-x-3">
              {socialIcons.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  aria-label={item.label}
                  className="p-2 bg-black/30 hover:bg-black/50 rounded-full transition-colors duration-200"
                >
                  <item.icon className="h-5 w-5 text-white" />
                </a>
              ))}
            </div>
            <p className="text-xs text-white/70 mt-2 sm:mt-0">
              This material may not be reproduced without permission
            </p>
          </div>

          <div className="flex flex-wrap justify-center mt-4 sm:mt-0 space-x-4 sm:space-x-6 text-xs text-white/50">
            <LinkItem href="/terms">Terms and Condition</LinkItem>
            <LinkItem href="/privacy">Privacy Policy</LinkItem>
            <LinkItem href="/dmca">DMCA Policy</LinkItem>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 text-center text-xs text-white/50 border-t border-white/10 pt-3">
          &copy; {new Date().getFullYear()} Vernis. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default ComplexFooter;
