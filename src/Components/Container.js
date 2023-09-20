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
         <div className='co'>
          <div className='currentCard'>
            <Card className="card">
                  <Card.Title className='title'>{weatherData.current.date}</Card.Title>
                  <Card.Img className='img' variant="top" src={currentData.condition.icon}/>
                  <Card.Body className="cardBody">
                    <Card.Text className='cardtext'>
                      {currentData.temp_c}°C - {currentData.condition.text}
                    </Card.Text>
                  </Card.Body>
            </Card>
          </div>
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
                            {id.day.avgtemp_c}°C - {id.day.condition.text}
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
    )
  
  }
  


export default Container




