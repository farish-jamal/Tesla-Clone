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
import ModelS from "./components/routes/ModelS";
import ModelX from "./components/routes/ModelX";
import Model3 from "./components/routes/Model3";
import ModelY from "./components/routes/ModelY";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/models">
            <ModelS />
          </Route>
          <Route path="/modelx">
            <ModelX />
          </Route>
          <Route path="/modely">
            <ModelY />
          </Route>
          <Route path="/model3">
            <Model3 />
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
