import React, { useState } from 'react';
import ComplexFooter from './footer';

const ContactUs = () => {
  // Form data ko manage karne ke liye state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Input changes ko handle karna
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Form submission ko handle karna
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    
    // Yahan aap backend API call kar sakte hain.
    alert(`Thank you, ${formData.name}! Your message has been received.`);
    
    // Form ko reset karna
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div>
    
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-5">
      <div 
        // Yeh hai naya outer container jo sab kuch enclose karta hai
        className="w-full max-w-xl p-10 bg-white rounded-3xl shadow-2xl" 
        // p-10: Padding for space inside the big box
        // rounded-3xl: Bahut zyada rounded corners (jaise image mein hai)
        // shadow-2xl: Halki si shadow for depth
      >
      {/* Header Section */}
      <header className="mb-8  max-w-lg  pt-4">
        <h1 className="text-4xl font-black text-gray-800 font-serif mb-1">
          “Let's Connect”
        </h1>
        {/* Subtitle - Yellow/Orange color */}
        <p className="text-base font-semibold pt-3"
        style={{color:"rgba(217, 164, 65, 1)"}}>
          We'd love to hear your feedback, ideas, or suggestions
        </p>
      </header>
      
      {/* Main Form Container Card */}
      <div 
        className="w-full max-w-lg p-8 bg-white rounded-xl shadow-lg 
                   border-2 border-blue-900" // Dark blue border around the card
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          
          {/* Name Input */}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
            // Input styling - Rounded corners, padding, light border, and focus state
            className="w-full px-5 py-3 border border-yellow-500 rounded-lg text-lg 
                       placeholder-gray-500 focus:outline-none focus:border-blue-900 
                       focus:ring-2 focus:ring-yellow-500 transition duration-300"
          />
          
          {/* Email Input */}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="w-full px-5 py-3 border border-yellow-500 rounded-lg text-lg 
                       placeholder-gray-500 focus:outline-none focus:border-blue-900 
                       focus:ring-2 focus:ring-yellow-500 transition duration-300"
          />
          
          {/* Message Textarea */}
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter Message"
            required
            className="w-full px-5 py-3 border border-yellow-500 rounded-lg text-lg 
                       placeholder-gray-500 resize-none focus:outline-none 
                       focus:border-blue-900 focus:ring-2 focus:ring-yellow-500 transition duration-300"
          />
          
          {/* Submit Button */}
          <button 
            type="submit" 
            // Button styling - Dark blue background, white text, hover effect
            className="self-center mt-4 px-8 py-3 bg-blue-700 text-white font-semibold 
                       rounded-lg shadow-md hover:bg-blue-800 transition duration-200 w-1/2"
          >
            Submit
          </button>
        </form>
      </div>
      </div>
      </div>
      <ComplexFooter/>
    </div>
  );
};

export default ContactUs;