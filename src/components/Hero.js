import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom'; // Import Link

const slides = [
  {
    src: '/hero-banner.png',
    alt: 'Hero Banner with people',
    headline: 'Unlock Your Financial Potential',
    subheadline: 'Get the funding you need, quickly and easily.',
    ctaText: 'Apply for a Loan',
    ctaLink: '/personal-loan', // <-- Updated link to the form page
  },
  {
    src: '/group1.jpg',
    alt: 'Our Friendly Team',
    headline: 'Meet Our Dedicated Team',
    subheadline: 'Committed to helping you achieve your goals.',
    ctaText: 'Learn More About Us',
    ctaLink: '#about', // Link to the About section
  },
   {
    src: '/group2.jpg',
    alt: 'We Are Here For You',
    headline: 'Trusted Support Every Step',
    subheadline: 'Your financial journey starts here.',
    ctaText: 'Get Started Today',
    ctaLink: '#apply', // Link to the Apply section
  },
];

const Hero = () => (
  <section className="bg-[#f8f6f2] px-8 py-6 flex justify-center relative">
    <div className="max-w-5xl w-full rounded-xl shadow-md overflow-hidden">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={2000}
        transitionTime={700}
        swipeable
        emulateTouch
      >
        {slides.map((slide, idx) => (
          <div key={idx} className="relative h-[480px] md:h-[550px]">
            <img src={slide.src} alt={slide.alt} className="w-full h-full object-cover" />
            {/* Text Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-start p-8 md:p-16">
              <div className="text-white text-left max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4">{slide.headline}</h2>
                <p className="text-lg md:text-xl mb-5 md:mb-6">{slide.subheadline}</p>
                {/* Changed <a> to <Link> and href to to */}
                <Link to={slide.ctaLink} className="bg-secondary text-white text-lg font-semibold px-6 py-3 rounded-md hover:bg-green-700 transition-colors inline-block">
                   {slide.ctaText}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  </section>
);

export default Hero;
