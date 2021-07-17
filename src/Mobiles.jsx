import React from 'react';
import './index.css';
import Edata from './Electronicdata';
import Button from '@material-ui/core/Button';

const Mobiles = (props)=>{
return(
<> 

<div className="Ediv">
 <div className="Eimg">
   <img src={props.imgsrc} />
 </div>
 <h5>{props.title}</h5>
 <h6>{props.offers}</h6>
 <Button variant="contained" color="primary" href={props.showall} target="_blank" className="showall">
      Show All
  </Button>
</div>

</>



);

};

export default Mobiles;