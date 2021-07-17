import React from 'react';
import './index.css';
const Carousel = () =>{
return(
<>
 <div className="carousel">
 <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100 h-50" src="https://i1.wp.com/realmecentral.com/wp-content/uploads/2020/09/realme-Narzo-20-Banner-realme-Central-1.png?fit=875%2C492&ssl=1" alt="First slide" className="banners"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="http://onlinebuyindia.net/wp-content/uploads/2016/02/201602d11_192051_.jpg" alt="Second slide" className="banners" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://i.pinimg.com/originals/44/30/fc/4430fc7ab26742016aa7fb80610e6e41.jpg" alt="Third slide" className="banners" />
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
 </div>
</>





)
};

export default Carousel;
