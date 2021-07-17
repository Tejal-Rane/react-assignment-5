import React from  'react';
import './index.css';
import Navbar from './Navbar';
import Carousel from './Carousel';
import Mobiles from './Mobiles';
import Edata from './Electronicdata';
import CountDown from './CountDown';
import TimerOutlinedIcon from '@material-ui/icons/TimerOutlined';
import Footer from './Footer';
const App =()=>{
return(
<>
<div className="flex-container">
<Navbar />
<Carousel />
<h1> Best of Electronics</h1>
<h5>Devices and Accessories</h5>
<div className="timer">
<TimerOutlinedIcon className="icon"/><span className="count"><CountDown /></span>

</div>
{/* <h3><TimerOutlinedIcon /><CountDown /><span>Offer Time-Left</span> </h3> */}
<div className="div_1">
{Edata.map((val,index)=>{
  return(
    <Mobiles 
    key={val.id}
  imgsrc={val.imgsrc}
  title={val.title}
  offers={val.offer}
  showall={val.showall}
  />
  )
})}
</div>
</div>
<Footer />
</>

)
};

export default App;
