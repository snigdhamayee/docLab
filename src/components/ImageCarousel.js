import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000, // Adjust the speed to your preference (e.g., 3000ms = 3 seconds)
};

const sliderContainerStyle = {
  width: '80%',
  margin: '40px auto 0',
  borderRadius: '50px',
  overflow: 'hidden', // Ensure content doesn't overflow if border-radius is applied
};

const MySlider = () => (
  <div style={sliderContainerStyle}>
    <Slider {...sliderSettings}>
      {/* Your slider content here */}
      <div className="divBgclr1">
        <img src="/th.jpg" alt="Slide 1" className="slider-image" />
        <div className="blinking-star">* Free</div>
      </div>
      <div className="divBgclr2">
        <img src="/OIP.jpg" alt="Slide 2" className="slider-image" />
        <div className="blinking-star">* Free</div>
      </div>
      <div className="divBgclr3">
        <img src="/OIP (1).jpg" alt="Slide 3" className="slider-image" />
        <div className="blinking-star">* Free</div>
      </div>
    </Slider>
  </div>
);

export default MySlider;
