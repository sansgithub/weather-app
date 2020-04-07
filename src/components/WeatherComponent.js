import React from 'react';

const WeatherComponent = (props)=>(
   
            <div className="weather-box">
                <div className="city-class">{props.city}</div>
                <div className="temp-class">{props.temp}</div>
            </div>
        );

export default WeatherComponent;