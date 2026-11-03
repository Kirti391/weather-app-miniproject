import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';



import './InfoBox.css'
const InfoBox = ({info}) => {
   const INIT_URL="https://images.unsplash.com/photo-1437435409766-a478cc6da81a?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";

   const HOT_URL="https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";
   const COLD_URL="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";
   const RAINY_URL="https://images.unsplash.com/photo-1776917983196-754d8254a0a9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";
   
  // let info={

  //   feelsLike: 21.26,
  //   humidity: 31,
  //   pressure: 1015,
  //   sunsetTime: "5:34:40 pm",
  //   temp: 22.18,
  //   tempMax: 22.18,
  //   tempMin: 22.18,
  //   weatherCondition: "Clear",
  //   weatherDescription: "clear sky",
  //   windSpeed: 2.88,
  //   cityName: "Kurukshetra",
  //   country: "IN"

  // }
  return (
    <div className='InfoBox'>
     {/* <h1>Weather Info- {info.weatherCondition}</h1> */}
     <div className='card-container'>
     <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="clear sky"
        height="140"
        image={info.humidity>80?RAINY_URL:info.temp>15?HOT_URL:COLD_URL}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.cityName}, {info.country}{info.humidity>80?<ThunderstormIcon/>:info.temp>15?<SunnyIcon/>:<AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" color='text.secondary'component={"span" }>
        <p>Temperature: {info.temp}&deg;C</p>
        <p>Humidity= {info.humidity}%</p>  
        <p>Wind Speed= {info.windSpeed} m/s</p>
        <p>Min Temp={info.tempMin}&deg;C</p>
        <p>Max Temp={info.tempMax}&deg;C</p>
        <p>The weather can be described as <i>{info.weatherDescription}</i> feels like {info.feelsLike}&deg;C</p>
        <p></p>
        </Typography>
       
       
      </CardContent>
    
    </Card>
    </div>
    </div>
  )
}

export default InfoBox
