import { useState } from "react";
import { Carousel } from "react-bootstrap";

export const Home: React.FC =()=>{
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex:number) => {
      setIndex(selectedIndex);
    };
  
    return (
        <>
            <h1>Welcome to Admin panel</h1>
            <h3>Please use the Navigation to Add, View, Update Restaurants!!</h3>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                <img title="First" src="https://picsum.photos/id/30/900/500"/>
                <Carousel.Caption>
                    <h3>Flavors Unleashed</h3>
                    <p>Discover a world of culinary delights at your fingertips</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img title="Second" src="https://picsum.photos/id/42/900/500"/>
                <Carousel.Caption>
                    <h3>Gourmet Guide</h3>
                    <p>Your ultimate companion for exploring exquisite tastes</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img title="Third" src="https://picsum.photos/id/63/900/500"/>
                <Carousel.Caption>
                    <h3>Taste Journey</h3>
                    <p>
                    From street food to fine dining, find your next craving
                    </p>
                </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
      </>
    );
}