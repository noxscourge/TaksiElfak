import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const SlideShow = () => {
  return (
  
    <div className="carousel-wrapper" >
        
    <Carousel infiniteLoop useKeyboardArrows autoPlay interval={4500}>
        

        <div>
            <img src="../img-01.jpg"  alt=""/>
        </div>
        <div >
            <img src="../img-02.jpg" alt=""/>
        </div>
        
    </Carousel>


   
     
</div>
   
  )
}

export default SlideShow
