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
import Footer from "./components/Footer";
import Models from "./components/cars/Models";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/models">
          <Models
              backgroundImg={modelS}
              title="Model S"
              range="390 mi"
              peakPower="1,020 hp"
              topSpeed="200 kmph"
            />
          </Route>
          <Route path="/modelx">
            <Models
              backgroundImg={modelX}
              title="Model X"
              range="350 mi"
              peakPower="1,130 hp"
              topSpeed="150 kmph"
            />
          </Route>
          <Route path="/modely">
          <Models
              backgroundImg={modelY}
              title="Model Y"
              range="410 mi"
              peakPower="1,040 hp"
              topSpeed="190 kmph"
            />
          </Route>
          <Route path="/model3">
          <Models
              backgroundImg={model3}
              title="Model 3"
              range="400 mi"
              peakPower="1100 hp"
              topSpeed="200 kmph"
            />
          </Route>
          <Route path="/">
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
              desc="Lowest Cost Solar Panels in America"
              leftBtn="custom order"
              rightBtn="Exisitig inventory"
            />
            <Section
              backgroundImg={solarR}
              title="solar roof"
              desc="Produce Clean Energy From Your Roof"
              leftBtn="custom order"
              rightBtn="Exisitig inventory"
            />
            <Section
              backgroundImg={access}
              title="accessories"
              desc=""
              leftBtn="shop now"
            />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
