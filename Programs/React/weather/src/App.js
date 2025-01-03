import logo from './logo.svg';
import './App.css';
import { AiOutlineSearch } from "react-icons/ai";
import { TiWeatherCloudy } from "react-icons/ti";
import { TiWeatherShower } from "react-icons/ti";
import { TiWeatherSnow } from "react-icons/ti";
import { TiWeatherSunny } from "react-icons/ti";
import { TiWeatherDownpour } from "react-icons/ti";
import { useEffect, useState } from 'react';
import { TiWeatherWindy } from "react-icons/ti";
import WeatherReport from './WeatherReport';


function App() {
  let apiKey = 'd09f5ffb548e881ca236d853bb0f5af4';
  const [icon, setIcon] = useState(<TiWeatherCloudy />);
  const [temp, setTemp] = useState('');
  const [city, setCity] = useState('Chennai');
  const [countery, setCountery] = useState('');
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [wind, setWind] = useState(0);
  const [text, setText] = useState('chennai');
  const [cityNotFound, setcityNotFound] = useState(false);
  const [loading, setloading] = useState(false);
  const [errors, setErrors] = useState(null);
  const weatherIconMap = {
    "01d":TiWeatherSunny,
    "01n":TiWeatherSunny,
    "02d":TiWeatherCloudy,
    "02n":TiWeatherCloudy,
    "03d":TiWeatherShower,
    "03n":TiWeatherShower,
    "04d":TiWeatherWindy,
    "04n":TiWeatherWindy,
    "09d":TiWeatherWindy,
    "09n":TiWeatherWindy,
    "10d":TiWeatherDownpour,
    "10n":TiWeatherDownpour,
    "11d":TiWeatherDownpour,
    "11n":TiWeatherDownpour,
    "13d":TiWeatherSnow,
    "13n":TiWeatherSnow,
    "50d":TiWeatherSnow,
    "50n":TiWeatherSnow,
  }
  const search = async() => {
    setloading(true);
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${apiKey}&units=Metric
`;
    try{
      let response = await fetch(url);
      let data = await response.json();
      if (data.cod === "404"){
         setcityNotFound(true);
         setloading(false);
          return;
      }
      setTemp(Math.floor(data.main.temp));
      setCity(data.name);
      setCountery(data.sys.country);
      setLat(data.coord.lat);
      setLon(data.coord.lon);
      setWind(data.wind.speed);
      setHumidity(data.main.humidity);
      const weatherIcon = data.weather[0].icon;
      setIcon(weatherIconMap[weatherIcon] || <TiWeatherSunny />);
      setcityNotFound(false);
    }
    catch(error) {
      console.error("error", error.message);
      setErrors("An error occured while fetching data", error.message);
    }
    finally {
      setloading(false);
    }
  }
  const handleCity = (e) => {
    setText(e.target.value);
  }
  const handleKeyDown = (e) => {
    if(e.key === 'Enter') {
      search(); 
    }
  }

  useEffect(() => {
    search();
  }, []);

  return (
    <div className="container">
      <div className="inputcontainer">
        <input type="text" 
        className="cityInput" 
        placeholder="Search City" 
        value={text} 
        onChange={handleCity}
        onKeyDown={handleKeyDown}
        />
          <div className="searchIcon" onClick={() => search()}>
            <AiOutlineSearch />
          </div>
      </div>
      {loading  && <div className='loading'>Loading ...</div>}
      {errors && <div className='error'>{errors}</div>}
      {cityNotFound && <div className='notfound'>City Not Found</div>}
      {!loading && !cityNotFound && <WeatherReport 
      icon={icon}
      temp={temp}
      city={city}
      countery={countery}
      lat={lat}
      lon={lon}
      humidity={humidity}
      wind={wind}
      />}
    </div>
  );
}

export default App;
