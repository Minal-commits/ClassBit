import React from 'react';
import ContactImage from '../../assets/contact.png';

const Contact = () => {
  return (
    <div className="w-full h-[91vh] flex items-center justify-between gap-12">
      <div className="rounded-lg w-[50%]">
        <h1 className="text-4xl font-semibold mb-6 text-gray-800">
          Having Issues? Contact the Developer
        </h1>
        <form className="space-y-6 pt-10">
          <div className="flex flex-col">
            <label className="text-gray-600 font-medium text-xl">Your Name:</label>
            <input 
              type="text" 
              className="mt-1 py-2 border-b outline-none" 
              placeholder="Enter your name"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-600 font-medium text-xl">Description:</label>
            <textarea 
              className="mt-1 py-2 border-b outline-none h-32 text-lg" 
              placeholder="Enter bug description"
              rows={4}
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="w-full mt-4 p-3 bg-[#101828] text-white rounded-lg cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Image Section */}
      <div className="w-[40%]">
        <img src={ContactImage} alt="Contact Illustration" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default Contact;
