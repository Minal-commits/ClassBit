import React from "react";

const TestimonialCard = ({ name, review }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center justify-center text-center border border-gray-200 min-h-[30vh]">
      <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center text-xl font-bold text-gray-700">
        {name.charAt(0)}
      </div>
      <h3 className="text-xl font-semibold mt-4 text-gray-800">{name}</h3>
      <p className="text-gray-600 mt-2 text-lg">{review}</p>
    </div>
  );
};

export default TestimonialCard;
