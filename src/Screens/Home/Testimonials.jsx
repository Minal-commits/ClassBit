import React from "react";
import Slider from "react-slick";
import TestimonialCard from "./TestimonialCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IconChevronCompactLeft, IconChevronCompactRight } from "@tabler/icons-react";

const Testimonials = () => {
  const testimonials = [
    { name: "Minal", review: "Amazing platform! Helped me improve my coding skills tremendously." },
    { name: "Arjun", review: "A great place to learn and practice coding. Highly recommended!" },
    { name: "Sara", review: "Loved the user-friendly interface and interactive lessons." },
    { name: "Rohan", review: "Challenging exercises that really push you to think deeper." },
    { name: "Abhra", review: "The best coding platform for students. Super engaging and fun!" },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows:false,
    // nextArrow: <CustomNextArrow />,
    // prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full min-h-[80vh] flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-14 text-center">What our users say</h1>
      <div className="w-full gap-2 flex flex-col justify-between">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-4">
              <TestimonialCard name={testimonial.name} review={testimonial.review} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;


const CustomNextArrow = ({ onClick }) => {
  return (
    <div 
      className="absolute top-1/2 -right-8 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-full p-2 cursor-pointer z-10"
      onClick={onClick}
    >
      <IconChevronCompactRight size={24} />
    </div>
  );
};

const CustomPrevArrow = ({ onClick }) => {
  return (
    <div 
      className="absolute top-1/2 -left-8 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-full p-2 cursor-pointer z-10"
      onClick={onClick}
    >
      <IconChevronCompactLeft size={24} />
    </div>
  );
};
