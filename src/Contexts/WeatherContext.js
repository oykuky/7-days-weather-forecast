import {createContext ,useContext,useEffect,useState} from "react";
import axios from 'axios';

const WeatherContext = createContext();

// WetProvider adında bir bileşen (component) oluşturuyoruz. Bu bileşen, hava durumu verilerini yönetecek
export const WetProvider = ({children}) => {
    const key = '799f2ec2bca14ba1b02174907232009';

    const [city ,setCity] = useState('Samsun')
    const [weatherData,setWeatherData] = useState(null);
    useEffect (() => {                      
    async function get() {                 
      try{
        const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}&days=7&aqi=yes&alerts=yes`);
        setWeatherData(response.data);
      }catch(err){
        console.error(err);
      }
    }
     console.log(weatherData); 
    get();
    },[city]) 
    const values = { city ,setCity , weatherData, setWeatherData}
    return(
        // WeatherContext.Provider kullanarak bağlamı çevreleyen bileşenleri sarmalıyoruz ve içeriğini çocuk bileşenlere (children) iletiyoruz
        <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
    )
}

export const useWeather = () => useContext(WeatherContext);


