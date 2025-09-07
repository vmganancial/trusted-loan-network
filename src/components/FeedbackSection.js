import React from 'react';
import FeedbackForm from './FeedbackForm';
import ProfileIcon from './ProfileIcon';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const reviews = [
  {
    name: 'Joegene Quesada',
    jobTitle: 'Project Manager',
    message: 'Great service! The loan process was smooth and efficient.',
    rating: 5
  },
  {
    name: 'Juan Dela Cruz',
    jobTitle: 'HR Manager',
    message: 'Very professional team. They helped me get the loan I needed.',
    rating: 5
  },
  {
    name: 'Bary Reyes',
    jobTitle: 'Chief Information Officer',
    message: 'Excellent customer service and quick response time.',
    rating: 5
  },
  {
    name: 'May Bahay',
    jobTitle: 'Small Business Owner',
    message: 'Quick and easy application process. Highly recommended!',
    rating: 4
  },
  {
    name: 'Juan Direction',
    jobTitle: 'Freelance Developer',
    message: 'The team was very helpful and guided me through every step.',
    rating: 5
  },
  {
    name: 'Pedro Penduko',
    jobTitle: 'Accountant',
    message: 'Got my loan approved in no time. Fantastic service!',
    rating: 5
  }
];

const FeedbackSection = () => {
  // Settings for react-slick carousel
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    autoplaySpeed: 1500,
    speed: 500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <section className="bg-primary min-h-[600px] flex items-center justify-center py-16 px-4">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Feedback Form Card */}
        <div className="bg-[#f8f6f2] rounded-2xl shadow-lg p-10 w-full max-w-md flex flex-col items-center">
          <img src="/logo.png" alt="Logo" className="h-16 mb-6" />
          <p className="text-primary text-xl font-bold text-center mb-2">Leave a feedback</p>
          <p className="text-gray-700 text-lg text-center mb-6">Your feedback matter to us!</p>
          <FeedbackForm />
        </div>
        {/* Reviews Section */}
        <div className="w-full md:w-1/2">
          <div className="w-full px-2 md:px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">WHAT OUR CLIENTS SAY</h2>
            {/* Wrap reviews in Carousel */}
            <Slider {...settings} className="space-y-6">
              {reviews.map((review, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-md text-left mb-6 border border-gray-200">
                  <div className="flex items-center gap-4 mb-2">
                    <ProfileIcon name={review.name} size="md" />
                    <div>
                      <h3 className="font-semibold text-lg">{review.name}</h3>
                      <p className="text-gray-500 text-sm">{review.jobTitle}</p>
                      <div className="flex text-yellow-400 mt-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <span key={i}>★</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mt-1">{review.message}</p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;


