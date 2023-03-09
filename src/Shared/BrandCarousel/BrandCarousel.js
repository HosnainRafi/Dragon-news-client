import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../assets/Brand1.png';
import img2 from '../../assets/Brand2.png';

const BrandCarousel = () => {
    return (
        <div>
            
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                    />
                    
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                    />

                    
                </Carousel.Item>

            </Carousel>
        </div>
    );
};

export default BrandCarousel;