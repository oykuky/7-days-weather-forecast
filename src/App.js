import './App.css';
import { WetProvider } from './Contexts/WeatherContext';
import Container from './Components/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import CityDropdown from './Components/CityDropdown';

function App() {
  
  return (
    <div className='App'>
      <WetProvider>
      <CityDropdown/>
      <Container/>
      </WetProvider>
    </div>
    
  );
}

export default App;
//WetProvider ile hava durumu verilerini sağlıyor