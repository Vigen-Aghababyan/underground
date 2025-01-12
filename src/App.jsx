import { Element } from 'react-scroll';
import './App.css'; // Подключаем стили
import Home from './Components/Home/Home';
import Portfolio from './Components/Portfolio/Portfolio';
import Masters from './Components/Masters/Masters';
import Pirsting from './Components/Pirsting/Pirsting';
import School from './Components/School/School';
import GiftCard from './Components/GiftCard/GiftCard';
import Registration from './Components/Registration/Registration';

const App = () => {
  return (
    <div>
      <div>
        <Element name="home">
          <Home />
        </Element>

        <Element name="portfolio">
          <Portfolio />
        </Element>

        <Element name="masters" >
          <Masters />
        </Element>
        <Element name="pirsting">
          <Pirsting />
        </Element>
        <Element name="school">
          <School />
        </Element>
        <Element name="giftcard">
          <GiftCard />
        </Element>
        <Element name="registration">
          <Registration />
        </Element>
       
      </div>
    </div>
  );
};

export default App;
