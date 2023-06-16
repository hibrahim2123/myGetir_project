import "./index.css";
import Header from "./components/Header";
import Slick from "./components/Slick";
import Categories from "./components/Categories";
import Campaign from "./components/Campaign";
import Favorites from "./components/Favorites";
import MobileApp from "./components/MobileApp";
import Cards from "./components/Cards";
import Footer from "./Footer";
import {
  useWindowSize,
  useWindowWidth,
  useWindowHeight,
} from "@react-hook/window-size";

function App() {
  const windowSize = useWindowWidth();
  return (
    <div className="App">
      <Header></Header>
      {windowSize < 768 && <Campaign></Campaign>}
      <Slick></Slick>
      <Categories></Categories>
      <div className="grid gap-y-6 pt-8">
        {windowSize >= 768 && <Campaign></Campaign>}
        <Favorites></Favorites>
        <MobileApp></MobileApp>
      </div>
      <Cards></Cards>
      <Footer></Footer>
    </div>
  );
}

export default App;
