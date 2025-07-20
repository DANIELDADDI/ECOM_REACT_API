import Carousel from "react-bootstrap/Carousel";
import Ratio from "react-bootstrap/Ratio";
import sliderOne from "../assets/slideone.png";
import sliderTwo from "../assets/slidetwo.png";
import sliderThree from "../assets/slidethree.png";

function SliderShow() {
  return (
    <Carousel className="container" style={{ maxWidth: 1200, maxHeight: 500 }}>
      <Carousel.Item>
        <Ratio aspectRatio="21x9">
          <img src={sliderOne} alt="sliderOne images" />
        </Ratio>
        <Carousel.Caption className="">
          <h3>አዲስ አበባ ይብረሩ</h3>
          <p>እያንዳንዱ፡ሰው፡የዘር፡የቀለም፡የጾታ፡የቋንቋ፡የሃይማኖት፡የፖለቲካ</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Ratio aspectRatio="21x9">
          <img src={sliderTwo} alt="slierTwo image" />
        </Ratio>
        <Carousel.Caption className="bg-gray">
          <h3>Dubai 30% Discount</h3>
          <p>የሰው፡ልጅ፡ሁሉ፡ሲወለድ፡ነጻና፡በክብርና፡በመብትም፡እኩልነት፡ያለው፡ነው።፡</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Ratio aspectRatio="21x9">
          <img src={sliderThree} alt="sliderThree images" />
        </Ratio>
        <Carousel.Caption>
          <h3>Book Hotel in Addis </h3>
          <p>ማንም፡ሰው፡ቢሆን፡የጭካኔ፡ስቃይ፡እንዳይደርስበት፡ወይም፡ከሰብዓዊ፡አፈጻጸም፡</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default SliderShow;
