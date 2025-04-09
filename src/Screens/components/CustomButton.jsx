import React from "react";

const CustomButton = ({ title = "", onClick, color = "#101828", className }) => {
  return (
    <button
      style={{ backgroundColor: color }}
      className={`px-4 py-2 text-white rounded-md font-semibold cursor-pointer 
                transition-all duration-200 ease-in-out ${className}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default CustomButton;
