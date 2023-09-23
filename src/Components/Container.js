import React from 'react'
import Card from 'react-bootstrap/Card';
import { useWeather} from '../Contexts/WeatherContext';
import CardGroup from 'react-bootstrap/CardGroup';



function Container() {

  const {weatherData} = useWeather();
  // Eğer hava durumu verileri henüz yüklenmediyse, bir yükleme mesajı gösteriyoruz
  if(weatherData === null) {
    return <div className='loaded'>
      Veriler Yükleniyor...
    </div>
  }
  const weatherList =  weatherData.forecast.forecastday;
  console.log(weatherList);
  const currentData = weatherData.current;
  console.log(currentData);

  
  return (
      <div className={'big-co' }>
            <div className='currentCard'>
                <h3 className='header'>Current Weather</h3>
                <p className='temp'> 
                {currentData.temp_c}°C 
                </p>
                <div className='Currentinfo'>
                  <p className='feelslike'> 
                  Feels like {currentData.feelslike_c}°C </p>
                  <br/>
                  <p>Humidity : {currentData.humidity}</p>
                  <p>Last updated : {currentData.last_updated}</p>
                  <p>Wind direction : {currentData.wind_dir}</p>
              </div>
              <Card className='card' >
                    <Card.Img className='currentimg' variant="top" src={currentData.condition.icon}/>
                    <Card.Body className="CurrentBody">
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
                  const date = new Date(id.date);
                  //date nesnesi string olduğu için Date nesnesine çevirilir
                  const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' });
                    return (
                      <CardGroup key={index}>
                        <Card className="card">
                        <Card.Title className='title'>{dayOfWeek}</Card.Title>
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




