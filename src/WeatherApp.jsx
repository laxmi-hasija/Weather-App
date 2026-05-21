import SearchBox from './SearchBox'
import Infobox from './Infobox'
import { useState } from 'react'
import './WeatherApp.css';

export default function WeatherApp(){
  const [weatherinfo , setweatherinfo] = useState({
    city: "Delhi",
    feelslike: 40.21,
    humidity: 18,
    temp: 41.05,
    tempmax: 41.05,
    tempmin: 41.05,
    weather: "haze",
  });
  
  let updateInfo = (newinfo)=>{
     setweatherinfo(newinfo);
  }
  return <div style={{textAlign:"center"}}
  > <h2 >Weather App by Laxmi</h2>
   <SearchBox updateInfo={updateInfo}/>
  <Infobox info={weatherinfo}/>
  </div>
}