import Slider from "react-slick";

const CarouselSingle = (props) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return <Slider {...settings}>{props.children}</Slider>;
};

export default CarouselSingle;
