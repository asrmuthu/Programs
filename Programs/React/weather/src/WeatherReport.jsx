import React from 'react'
import './App.css';
import { SiAccuweather } from "react-icons/si";
import { WiHumidity } from "react-icons/wi";
import { TiWeatherWindy } from "react-icons/ti";




const WeatherReport = ({icon, temp, city, countery, lon, lat, humidity, wind}) => {
  return (
    <>
    <div className='image'>{icon}</div>
    <div className='temp'>{temp}°C</div>
    <div className='city'>{city}</div>
    <div className='countery'>{countery}</div>
    <div className='card'>
        <div>
            <span className='lat'>latitude</span>
            <span>{lat}</span>
        </div>
        <div>
            <span className='lon'>Longitude</span>
            <span>{lon}</span>
        </div>
    </div>
    <div className='data-container'>
        <div className='element'>
            <WiHumidity className='icon'/>
            <div className='data'>
                <div className='humidity_percentage'>{humidity}%</div>
                <div className='text'>Humidity</div>
            </div>
        </div>
        <div className='element'>
            <TiWeatherWindy className='icon'/>
            <div className='data'>
                <div className='wind_percentage'>{wind} km/h</div>
                <div className='text'>Wind Spead</div>
            </div>
        </div>
    </div> 
    <p className="footer">Designed by <a href="https://resume-muthupandi-raj.web.app/">Muthupandi Raj</a></p>
    </>
  ) 
}

export default WeatherReport