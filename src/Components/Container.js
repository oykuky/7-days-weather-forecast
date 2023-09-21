import React from 'react'
import Card from 'react-bootstrap/Card';
import { useWeather
 } from '../Contexts/WeatherContext';
import CardGroup from 'react-bootstrap/CardGroup';



function Container() {

  const {weatherData,setWeatherData} = useWeather();
  // Eğer hava durumu verileri henüz yüklenmediyse, bir yükleme mesajı gösteriyoruz
  if(weatherData === null) {
    return <div>
      Veriler Yükleniyor...
    </div>
  }
  const weatherList =  weatherData.forecast.forecastday;
  console.log(weatherList);
  const currentData = weatherData.current;
  console.log(currentData);
  
  return (
          <div className='big-co'>
          <div className='currentCard'>
           <h3 className='header'>Current Weather</h3>
          <div>
          <p className=''> 
           Feels like {currentData.temp_c}°C 
           </p>
           <br/>
           <p>Humidity</p>
          </div>
            <Card className='card' >
                  <Card.Img className='currentimg' variant="top" src={currentData.condition.icon}/>
                  <Card.Body className="cardBody">
                    <Card.Text className='cardtext'>
                      {currentData.condition.text}
                    </Card.Text>
                  </Card.Body>
            </Card>
          </div>

          <div className='co'>
           {/* Hava durumu verileri varsa aşağıdaki bileşeni render ediyoruz */}
          { weatherData &&
            (<div className='wetCards'>
            {
              weatherList.map((id ,index) => {
                  return (
                    <CardGroup key={index}>
                      <Card className="card">
                        <Card.Title className='title'>{id.date}</Card.Title>
                        <Card.Img className='img' variant="top" src={id.day.condition.icon}/>
                        <Card.Body className="cardBody">
                          <Card.Text className='cardtext'>
                            {id.day.avgtemp_c}°C <br/>
                            {id.day.condition.text}
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </CardGroup>
                  );
              })
            }
          </div> )
          }
          
        </div>
              
        </div>
         
    )
  
  }
  


export default Container




