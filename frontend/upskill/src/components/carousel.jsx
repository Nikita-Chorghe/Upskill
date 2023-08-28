import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const data = [
  {
    image: require("./images/coding.jpg"),
    caption: "Caption",
    description: "Description Here",
  },
  {
    image: require("./images/cooking.jpg"),
    caption: "Caption",
    description: "Description Here",
  },
  {
    image: require("./images/tax.jpeg"),
    caption: "Caption",
    description: "Description Here",
  },
];

function HomeCarousel() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {data.map((slide, i) => {
        return (
          <Carousel.Item>
            <img
              className="d-block object-fit-cover "
              src={slide.image}
              alt="slidingImages"
            />
            <Carousel.Caption>
              <h3>{slide.caption}</h3>
              <p>{slide.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}
export default HomeCarousel;
