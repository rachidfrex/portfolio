import React from 'react';

function Contact() {
  return (
    <div className="mt-5 mx-5 overflow-hidden md:mt-20 flex flex-col justify-center items-center">
      <h1 className='text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50'>
        Contact
      </h1>
      <form className="mt-8 w-full max-w-lg">
        <div className="mb-6">
        <label htmlFor="text" className="block text-sm font-medium text-white">Name</label>
          <input type="text" id="name" name="name" required
            className="mt-1 text-white placeholder:Name block w-full px-3 py-1 bg-black rounded-md shadow-sm focus:outline-none border-2 border-gray-700  "
          />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
          <input type="email" id="email" name="email" required
                     className="mt-1 text-white placeholder:Name block w-full px-3 py-1 bg-black rounded-md shadow-sm focus:outline-none border-2 border-gray-700  "
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium  text-white">Message</label>
          <textarea id="message" name="message" rows="4" required
                        className="mt-1 text-white placeholder:Name block w-full px-3 py-1 bg-black rounded-md shadow-sm focus:outline-none border-2 border-gray-700  "
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button type="submit" 
          className='px-4 py-2 mb-5 text-white rounded-md border-2 border-gray-700  bg-black' 
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
