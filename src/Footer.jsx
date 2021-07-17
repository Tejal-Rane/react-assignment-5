import React from 'react';
import './Footer.css';
const Footer = ()=>{
return(
<>
<div className="footer">
<div className="about">
<h5>Contact</h5><br />
<ul>
    <li>Contach Us</li>
    <li>Careers</li>
    <li>Flipkart</li>
    <li>Wholesale</li>
</ul>
</div>
<hr />
<div className="Help">
<h5>Help</h5><br />
<ul>
    <li>Payments</li>
    <li>Shipping</li>
    <li>Report</li>
    <li>Cancellation</li>
</ul>
</div>
<hr />
<div className="social">
<h5>Social</h5><br />
<ul>
    <li>Facebook</li>
    <li>Twitter</li>
    <li>Youtube</li>
    
</ul>
</div>
<hr />
<div className="Mailus">
<h5>Address</h5><br />
<p> Flipkart Internet Private Limited,<br/>
Buildings Alyssa, Begonia &<br/>
Clove Embassy Tech Village,<br/>
Outer Ring Road, Devarabeesanahalli Village,<br/>
Bengaluru, 560103,<br/>
Karnataka, India</p>
</div>

</div>

</>
)
};

export default Footer;