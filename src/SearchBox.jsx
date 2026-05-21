import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");
    let [error, setError]=useState(false);
 const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  const API_URL = import.meta.env.VITE_WEATHER_API_URL;
  let getweatherInfo = async()=>{
    try{let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
     let jsonResponse = await response.json();
     console.log(jsonResponse);
     let result = {
      city: city,
       temp : jsonResponse.main.temp,
       tempmin : jsonResponse.main.temp,
       tempmax : jsonResponse.main.temp,
       feelslike : jsonResponse.main.feels_like,
       humidity : jsonResponse.main.humidity,
       weather : jsonResponse.weather[0].description
     };
     console.log(result);
     return result;}
     catch(err){
      throw err;

     }
     
  }
  
  let handleChange = (event) => {
    setCity(event.target.value)

  }
  let handleSubmit = async (event) => {
    try{ event.preventDefault();
     console.log(city)
     setCity("")
     setError(false);
    let newinfo =  await getweatherInfo();
    updateInfo(newinfo);}
 catch(err){setError(true) }
    }
 return <form className="SearchBox" onSubmit={handleSubmit}>
 <TextField id="city" label="Enter City Name" variant="outlined"  value={city} onChange={handleChange} required/>
<br></br>
<br></br>
 <Button variant="contained" type="submit">Search</Button>
{error && <p style={{color: "red"}}>No such place exists</p>}
</form> 
}