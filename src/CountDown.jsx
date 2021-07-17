import React from 'react';
import CountdownTimer from "react-component-countdown-timer";


const CountDown =()=>{
    var settings = {
        count: 5432,
        // border: true,
        // showTitle: true,
        // noPoints: true,
      };
    return (
        <CountdownTimer {...settings} />
      );
};
export default CountDown;
