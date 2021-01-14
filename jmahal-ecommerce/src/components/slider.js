import React from 'react';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// images
import Image1 from '../assets/img/slider/1.webp';
import Image2 from '../assets/img/slider/2.webp';
import Image3 from '../assets/img/slider/3.webp';
import Image4 from '../assets/img/slider/4.webp';

const images = [
    {
        image: Image1,
        caption: 'caption',
        description: 'Des for 1'
    },
    {
        image: Image2,
        caption: 'caption',
        description: 'Des for 1'
    },
    {
        image: Image3,
        caption: 'caption',
        description: 'Des for 1'
    },
    {
        image: Image4,
        caption: 'caption',
        description: 'Des for 1'
    }
]
function slider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true
      };
    
    return (
        <Slider {...settings}>
        <li>
              <div className="seq-model">
                <img data-seq src={Image1} alt="Men slide img" />
              </div>
            </li>
            <li>
              <div className="seq-model">
                <img data-seq src={Image2} alt="Wristwatch slide img" />
              </div>
            </li>
            <li>
              <div className="seq-model">
                <img data-seq src={Image3} alt="Women Jeans slide img" />
              </div>
            </li>
            <li>
              <div className="seq-model">
                <img data-seq src={Image4} alt="Shoes slide img" />
              </div>
            </li>
      </Slider>
    )
}

export default slider
