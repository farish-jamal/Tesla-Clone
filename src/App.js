import "./App.css";
import Header from "./components/Header";
import Section from "./components/Section";
import modelS from "./assets/model-s.jpg";
import model3 from "./assets/model-3.jpg";
import modelX from "./assets/model-x.jpg";
import modelY from "./assets/model-y.jpg";
import solarP from "./assets/solar-panel.jpg";
import solarR from "./assets/solar-roof.jpg";
import access from "./assets/accessories.jpg";
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Section
        backgroundImg={modelS}
        title="Model S"
        desc="Order Online for Touchless Delivery"
        leftBtn="custom order"
        rightBtn="Exisitig inventory"
      />
      <Section
        backgroundImg={modelX}
        title="Model X"
        desc="Order Online for Touchless Delivery"
        leftBtn="custom order"
        rightBtn="Exisitig inventory"
      />
      <Section
        backgroundImg={modelY}
        title="Model Y"
        desc="Order Online for Touchless Delivery"
        leftBtn="custom order"
        rightBtn="Exisitig inventory"
      />
      <Section
        backgroundImg={model3}
        title="Model 3"
        desc="Order Online for Touchless Delivery"
        leftBtn="custom order"
        rightBtn="Exisitig inventory"
      />
      <Section
        backgroundImg={solarP}
        title="Solar Panel"
        desc="Order Online for Touchless Delivery"
        leftBtn="custom order"
        rightBtn="Exisitig inventory"
      />
      <Section
        backgroundImg={solarR}
        title="solar roof"
        desc="Order Online for Touchless Delivery"
        leftBtn="custom order"
        rightBtn="Exisitig inventory"
      />
      <Section
        backgroundImg={access}
        title="accessories"
        desc="Order Online for Touchless Delivery"
        leftBtn="shop now"
      />
      <Footer />
    </div>
  );
}

export default App;
