import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { useWeather } from '../Contexts/WeatherContext';
import cities from './cities.json'

function CityDropdown() {
  const {city, setCity} = useWeather();
  // Şehir seçildiğinde bu işlev çalışır ve setCity'i çağırarak şehri günceller
  const handleCitySelect = (selected) => {
    setCity(selected);
  }
  return (
    <div className='dropdown'>
    <Dropdown>
      <Dropdown.Toggle className='toggle' size='lg' variant="info" id="dropdown-basic">
      Şehir Seçiniz 
      </Dropdown.Toggle>
      <Dropdown.Menu className='dropItem' style={{ maxHeight: '300px', overflowY: 'auto' }}>
            {cities.map((city, index) => (
              <Dropdown.Item 
                key={index}
                onClick={() => handleCitySelect(city.name)}>
                {city.name}
              </Dropdown.Item>
            ))}
      </Dropdown.Menu>
   </Dropdown>
     <div className='cityBox'>
         <p> {city} </p>
      </div>
    </div>
  )
}

export default CityDropdown 