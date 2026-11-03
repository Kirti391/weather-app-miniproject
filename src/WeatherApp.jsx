import React, { useState } from "react"
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";

const WeatherApp = () => {
    const [weatherInfo, setWeatherInfo] = useState({
        feelsLike: 21.26,
        humidity: 31,
        pressure: 1015,
        sunsetTime: "5:34:40 pm",
        temp: 22.18,
        tempMax: 22.18,
        tempMin: 22.18,
        weatherCondition: "Clear",
        weatherDescription: "clear sky",
        windSpeed: 2.88,
        cityName: "Kurukshetra",
        country: "IN"
    })

    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);

    }
    return (
        <div style={{ textAlign: "center" }}>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo} />
        </div>
    )
}
export default WeatherApp;