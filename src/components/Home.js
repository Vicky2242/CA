import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import accountant1 from '../assets/T3.jpg';
import accountant2 from '../assets/T4.jpg';
import accountant3 from '../assets/T6.jpg';
import accountant4 from '../assets/slider.jpg';
import accountant5 from '../assets/slider-1.jpg';


const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: 'linear',
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        }
      }
    ]
  };

  return (
    <section id="home" className="bg-gray-100 p-4 md:p-8">
      <Slider {...settings} className="h-full">
        <div className="h-full flex justify-center items-center p-0 m-0">
          <img src={accountant1} alt="Accountant 1" className="w-full md:w-auto h-auto max-h-screen object-contain p-0 m-0" />
        </div>
        <div className="h-full flex justify-center items-center p-0 m-0">
          <img src={accountant2} alt="Accountant 2" className="w-full md:w-auto h-auto max-h-screen object-contain p-0 m-0" />
        </div>
        <div className="h-full flex justify-center items-center p-0 m-0">
          <img src={accountant3} alt="Accountant 3" className="w-full md:w-auto h-auto max-h-screen object-contain p-0 m-0" />
        </div>
        <div className="h-full flex justify-center items-center p-0 m-0">
          <img src={accountant4} alt="Accountant 3" className="w-full md:w-auto h-auto max-h-screen object-contain p-0 m-0" />
        </div>
        <div className="h-full flex justify-center items-center p-0 m-0">
          <img src={accountant5} alt="Accountant 3" className="w-full md:w-auto h-auto max-h-screen object-contain p-0 m-0" />
        </div>
      </Slider>
    </section>
  );
};

export default Home;
