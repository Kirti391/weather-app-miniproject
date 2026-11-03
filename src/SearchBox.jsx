import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import './SearchBox.css';
const SearchBox = ({updateInfo}) => {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather?";
    const API_KEY = "c22b76bf9b3eef2d646fc15b8f528b41";

    let getWeatherInfo = async (city) => {

        try{
             let response= await fetch(`${API_URL}q=${city}&appid=${API_KEY}&units=metric`);
       let jsonResponse= await response.json();
    //    console.log(jsonResponse);

       let result={
        temp:jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax:jsonResponse.main.temp_max,
        humidity:jsonResponse.main.humidity,
        feelsLike:jsonResponse.main.feels_like,
        weatherDescription:jsonResponse.weather[0].description,
        pressure:jsonResponse.main.pressure,

        weatherCondition:jsonResponse.weather[0].main,
        cityName:jsonResponse.name,
        windSpeed:jsonResponse.wind.speed,
        country:jsonResponse.sys.country,
        sunsetTime:new Date(jsonResponse.sys.sunset*1000).toLocaleTimeString(),
       };

       console.log(result);
       return result;
        }
        catch(error){
            throw error;
            
        }
      
    }


    let handleChange = (e) => {

        setCity(e.target.value);
    }

    let handleSubmit = async (e) => {
        try{
              e.preventDefault();
        console.log(city);
        setCity("");
        let newInfo=await getWeatherInfo(city);
        updateInfo(newInfo);
        }catch(error){
            console.log(error);
            setError(true);
        }
      

    }
    return (
        <div className='Searchbox'>
            {/* <h3>Search for the weather</h3> */}
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange} />
                <br />
                <br />
                <Button variant="contained" type="submit">
                    Search
                </Button>
            {error && <p style={{color:"red"}}>No such place found. Please try again.</p>}
            </form>
        </div>
    )
}

export default SearchBox
