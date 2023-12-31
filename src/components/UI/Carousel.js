import React from "react";

const Carousel = () => {
  return (
    <div className="d-flex justify-content-center h-50 bg-dark"> 
    <div
    id="carouselExampleIndicators"
      class="carousel slide w-50 "
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      
      <div class="carousel-inner">
        <div class="carousel-item active"  >
          <img class="d-block w-100" src='https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="First slide" />
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="https://images.pexels.com/photos/5553122/pexels-photo-5553122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Second slide" />
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="https://images.pexels.com/photos/6407633/pexels-photo-6407633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Third slide" />
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    
    </div>
  );
};

export default Carousel;
