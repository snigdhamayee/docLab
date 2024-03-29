import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import  '../styles.css';

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
  // <div style={sliderContainerStyle}>
  //   <Slider {...sliderSettings}>
  //     {/* Your slider content here */}
  //     <div className="divBgclr1">
  //       <img src="/th.jpg" alt="Slide 1" className="slider-image" />
  //       <div className="blinking-star">* Free</div>
  //     </div>
  //     <div className="divBgclr2">
  //       <img src="/OIP.jpg" alt="Slide 2" className="slider-image" />
  //       <div className="blinking-star">* Free</div>
  //     </div>
  //     <div className="divBgclr3">
  //       <img src="/OIP (1).jpg" alt="Slide 3" className="slider-image" />
  //       <div className="blinking-star">* Free</div>
  //     </div>
  //   </Slider>
  // </div>
  <section class="main-container">
  <div class="main">
    <div class="big-circle">
      <div class="icon-block">
        <img src="https://www.yudiz.com/codepen/animated-portfolio/web-dev-icon.png" alt="web design icon" />
      </div>
      <div class="icon-block">
        <img src="https://www.yudiz.com/codepen/animated-portfolio/game-design-icon.png" alt="game design icon" />
      </div>
      <div class="icon-block">
        <img src="https://www.yudiz.com/codepen/animated-portfolio/game-dev-icon.png" alt="game dev icon" />
      </div>
      <div class="icon-block">
        <img src="https://www.yudiz.com/codepen/animated-portfolio/ui-ux-icon.png" alt="ui-ux icon" />
      </div>
    </div>
    <div class="circle">
      <div class="icon-block">
        <img src="https://www.yudiz.com/codepen/animated-portfolio/app-icon.png" alt="app icon" />
      </div>
      <div class="icon-block">
        <img src="https://www.yudiz.com/codepen/animated-portfolio/blockchain-icon.png" alt="blockchain icon" />
      </div>
      <div class="icon-block">
        <img src="https://www.yudiz.com/codepen/animated-portfolio/arvr-icon.png" alt="ar-vr icon" />
      </div>
      <div class="icon-block">
        <img src="https://www.yudiz.com/codepen/animated-portfolio/artificial-intelligence-icon.png" alt="artificial intelligence icon" />
      </div>
    </div>
    <div class="center-logo">
      <img src="/download.png" alt="logo" height={200} width={200} />
    </div>
  </div>
</section>
);

export default MySlider;
