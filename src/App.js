import './App.css';
import Header from './Header';
import Carousel from './Carousel';
import carouselData from './carouseldata';
import Show from './Show';

function App() {
  return (
    <div className="App">
      <Header/>
      <Carousel data={carouselData}/>
      <Show/>
    </div>
  );
}

export default App;
