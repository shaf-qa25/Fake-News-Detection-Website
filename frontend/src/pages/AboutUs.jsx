import React from "react";
import Shagun from "./Shagun.jpg"
import Shafqa from "./Shafqa.jpg"
import Anushka from "./Anushka.jpg"
import ComplexFooter from "./footer";

// AboutUs.jsx
// Minimal About Us component as requested.
// Drop into your React app (e.g. src/pages/AboutUs.jsx) and make sure Tailwind is configured.

export default function AboutUs() {
  const team = [
    { name: "Shafqa Fatma", domain: "MERN Stack", img: Shafqa },
    { name: "Shagun Chaudhary", domain: "Designing", img: Shagun },
    { name: "Anushka", domain: "Machine learning", img: Anushka },
    
  ];

  return (
    <div>
    <div className="min-h-screen bg-white text-gray-900 p-6 lg:p-20">
      <header className="max-w-3xl mx-auto ">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>

        <p className="text-lg font-medium mb-4 text-yellow-500">
          “We're a team of passionate college students dedicated to building technology that helps people identify truth in the digital age.”
        </p>

        <p className="text-lg mb-4 text-black">
          Our goal is to create a reliable and user-friendly Fake News Detector that empowers readers to verify the authenticity of news articles before sharing them. We believe awareness and critical thinking are the first steps to fighting misinformation.
        </p>

        <p className="text-lg mb-8 text-black">
          We envision a future where technology and ethics go hand-in-hand — where news consumers are equipped with tools to distinguish facts from falsehoods.
        </p>
      </header>

      <section className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
        {team.map((member) => (
          <div key={member.name} className="text-center">
            <img
              src={member.img}
              alt={member.name}
              className="mx-auto w-40 h-40 object-cover rounded-xl  mb-3"
            />
            <div className="font-semibold">{member.name}</div>
            <div className="text-sm text-gray-500">{member.domain}</div>
          </div>
        ))}
      </section>
      
    </div>
    <footer>
    <ComplexFooter/>
  </footer>
  </div>
  );
}
