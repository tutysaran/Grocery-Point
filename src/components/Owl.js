// Owl.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; 

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      style={{
        position: 'absolute',
        right: '25px',
        top: '50%',
        transform: 'translateY(-50%)',
        fontSize: '30px',
        zIndex: 2,
        color: 'white',
        cursor: 'pointer',
      }}
    >
      <FaArrowRight />
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      style={{
        position: 'absolute',
        left: '25px',
        top: '50%',
        transform: 'translateY(-50%)',
        fontSize: '30px',
        zIndex: 2,
        color: 'white',
        cursor: 'pointer',
      }}
    >
      <FaArrowLeft />
    </div>
  );
};

const Owl = () => {
  const images = [
    // 'https://i.pinimg.com/originals/75/e5/b5/75e5b53686618d79417e44325f01a599.gif',
    
    'https://i.pinimg.com/1200x/97/24/7a/97247a14c23207b28a79c6f2462342fb.jpg',
    'https://i.pinimg.com/736x/c4/18/9f/c4189f29c87fbb9033d03b8107a5f201.jpg',
    'https://i.pinimg.com/736x/b3/37/2d/b3372d4bd8515bfeb7cfe8fc203fed74.jpg',
    'https://i.pinimg.com/736x/b1/3f/fe/b13ffe473154191ee28b7996d6045a8f.jpg',
    'https://i.pinimg.com/736x/11/6d/d5/116dd55e8f2ce4d0cd313be77f3c24e1.jpg',
    
    'https://i.pinimg.com/736x/a0/4f/d5/a04fd56625c9eb1c4d6fd0e902c01aed.jpg',
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div style={{ width: '100%', maxWidth: '1400px', margin: 'auto', marginTop: '20px', position: 'relative' }}>
      <Slider {...settings}>
        {images.map((url, index) => (
          <div key={index}>
            <img
              src={url}
              alt={`Slide ${index}`}
              style={{
                width: '100%',
                height: '600px',
                objectFit: 'cover',
                borderRadius: '10px',
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Owl;
