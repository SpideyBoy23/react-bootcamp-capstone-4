import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { Slider } from '../components/FeaturedSlider/FeaturedSlider';
import SliderData  from "../mocks/en-us/featured-banners";
import './App.css';

function App() {

  return (
    <>
      <div className="page-container">
        <Header />
        <div className="content-wrapper">
          <h1>Featured Models</h1>
          <Slider slides={SliderData}/>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
