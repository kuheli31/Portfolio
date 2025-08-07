import React from 'react';

function Contact() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <form className="w-full max-w-lg bg-[#000000] p-8 rounded-2xl shadow-2xl">
        <h1 className="text-3xl sm:text-5xl text-purple-800 font-bold mb-8 text-center">
        Contact Me
      </h1>
        
        <div className="mb-4">
          <label className="block text-purple-300 mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="text-left w-full px-4 py-2 rounded-lg bg-black text-white border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
            type="text"
            id="name"
            placeholder="Your Name"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-purple-300 mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="text-left w-full px-4 py-2 rounded-lg bg-black text-white border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
            type="email"
            id="email"
            placeholder="Your Email"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-purple-300 mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="text-left w-full px-4 py-2 rounded-lg bg-black text-white border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
            id="message"
            rows="5"
            placeholder="Your Message"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-blue-500 hover:to-purple-500 text-white py-3 rounded-xl font-semibold transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
