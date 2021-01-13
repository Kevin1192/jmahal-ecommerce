import React from 'react';

// images
import Image1 from '../assets/img/slider/1.webp';
import Image2 from '../assets/img/slider/2.webp';
import Image3 from '../assets/img/slider/3.webp';
import Image4 from '../assets/img/slider/4.webp';

function slider() {
    return (
          <section id="aa-slider">
    <div className="aa-slider-area">
      <div id="sequence" className="seq">
        <div className="seq-screen">
          <ul className="seq-canvas">
            <li>
              <div className="seq-model">
                <img data-seq src={Image1} className='slide-image opacity' alt="Men slide img" />
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
          </ul>
        </div>
        <fieldset className="seq-nav" aria-controls="sequence" aria-label="Slider buttons">
          <a type="button" className="seq-prev" aria-label="Previous"><span className="fa fa-angle-left"></span></a>
          <a type="button" className="seq-next" aria-label="Next"><span className="fa fa-angle-right"></span></a>
        </fieldset>
      </div>
    </div>
  </section>
    )
}

export default slider
