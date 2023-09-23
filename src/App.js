import './App.css';
import { WetProvider } from './Contexts/WeatherContext';
import Container from './Components/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import CityDropdown from './Components/CityDropdown';
import ThemeButton from './Components/ThemeButton';
import { useState } from 'react';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const appClassName = `App ${isDarkTheme ? 'dark' : ''}`;
  return (
    <div className={appClassName}>
      <WetProvider>
          <ThemeButton setIsDarkTheme={setIsDarkTheme} isDarkTheme={isDarkTheme}  />
          <CityDropdown/>
          <Container />
      </WetProvider>
    </div>
    
  );
}

export default App;
//WetProvider ile hava durumu verilerini sağlıyor