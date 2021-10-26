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
import interior from "./assets/new-interior.jpg";
import game from "./assets/game.jpg";
import connected from "./assets/connected.jpg";
import audio from "./assets/audio.jpg";
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
              color="#000"
              backdropImg={interior}
              speed="Top Speed"
              range_p="Range (est.)"
              peak="Peak Power"
              game={game}
              connected={connected}
              audio={audio}
            />
          </Route>
          <Route path="/modelx">
            <Models
              backgroundImg={modelX}
              title="Model X"
              range="350 mi"
              peakPower="1,130 hp"
              topSpeed="150 kmph"
              color="#000"
              backdropImg="https://assets.entrepreneur.com/content/3x2/2000/20200413144935-tesla-model-3.jpeg"
              speed="Top Speed"
              range_p="Range (est.)"
              peak="Peak Power"
              game="https://techcrunch.com/wp-content/uploads/2021/01/Center-Display.jpg"
              connected="https://tesla-cdn.thron.com/delivery/public/image/tesla/4b516502-71a4-476f-acd4-0e326c785657/bvlatuR/std/2880x1800/MX-Exterior-Hero-Desktop"
              audio="https://voonze.com/wp-content/uploads/2021/02/Will-the-2021-Tesla-Model-S-and-Model-X-steering.jpg"
            />
          </Route>
          <Route path="/modely">
          <Models
              backgroundImg="https://tesla-cdn.thron.com/delivery/public/image/tesla/0cf18940-c0bf-45f7-b2d8-46c3bc693c65/bvlatuR/std/0x0/model-y_R1@2"
              title="Model Y"
              range="410 mi"
              peakPower="1,040 hp"
              topSpeed="190 kmph"
              color="#000"
              backdropImg="https://cloudfront-us-east-2.images.arcpublishing.com/reuters/VK7MKQNXS5ITVM7VFEMGBA4CCI.jpg"
              speed="Top Speed"
              range_p="Range (est.)"
              peak="Peak Power"game="https://thenextavenue.com/wp-content/uploads/2020/05/Model-3-Interior-Dashboard-Head-On1-1536x864-1.jpg"
              connected="https://tesla-cdn.thron.com/delivery/public/image/tesla/8288d520-cd1a-468d-89eb-e73cfde99355/bvlatuR/std/2880x1800/Model-Y-Interior-Hero-Desktop-NA-KR"
              audio="https://preview.free3d.com/img/2019/03/2206079345653450008/i8hzoo2q-900.jpg"
            />
          </Route>
          <Route path="/model3">
          <Models
              backgroundImg="https://sm.mashable.com/mashable_in/seo/default/teslas-model-3-teardown-reveals-how-advanced-its-technology_a4pg.jpg"
              title="Model 3"
              range="400 mi"
              peakPower="1100 hp"
              topSpeed="200 kmph"
              color="#000"
              backdropImg="https://thedriven.io/wp-content/uploads/2020/10/2020-Tesla-M3-interior.jpg?w=640"
              speed="Top Speed"
              range_p="Range (est.)"
              peak="Peak Power"game="https://images.news18.com/ibnlive/uploads/2017/06/3c391a446dff55ef7c12becb4a919fc9.jpg?impolicy=website&width=510&height=356"
              connected="https://img.drivemag.net/media/default/0001/91/Tesla-Model-3-Interior-Dash-Head-On-5306-default-large.jpeg"
              audio="https://tesla-cdn.thron.com/delivery/public/image/tesla/ff91e6a8-f794-4473-9f85-6f5bf436f9ed/bvlatuR/std/1226x562/global-interior-carousel-1-slide-4-desktop"
            />
          </Route>
          <Route path="/roofs">
          <Models
              backgroundImg="https://images.hgmsites.net/lrg/solarcity-roof-tile-replacing-solar-panels_100579173_l.jpg"
              title="Solar Roof"
              range="25-Year"
              peakPower="24/7"
              desc="Transform your roof and produce clean energy"
              topSpeed="Solar Roof"
              color="#fff"
              backdropImg="https://cleantechnica.com/files/2019/10/tesla-solarglass-roof-version-3-TESLA-OFFICIAL.jpg"
              speed=" Sunlight to Energy"
              range_p="Warranty"
              peak="Protection"game="https://www.tesla.com/sites/default/files/solarroof/v3/design/solar-roof_design_D.jpg"
              connected="https://electrek.co/wp-content/uploads/sites/3/2019/01/Tesla-Solar-Roof-hero-e1546911751570.jpeg?quality=82&strip=all&w=1439"
              audio="https://www.tesla.com/sites/default/files/blog_images/BlogHero_2000x1045.jpg"
            />
          </Route>
          <Route path="/panels">
          <Models
              backgroundImg={solarP}
              title="Solar for Existing Roofs"
              desc="Lowest Cost Solar Panels in America—Money-back guarantee"
              range="25-Year"
              peakPower="24/7"
              topSpeed="Solar Panels"
              color="#000"
              backdropImg="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/itRCZaRhXY7s/v0/-1x-1.jpg"
              speed=" Sunlight to Energy"
              range_p="Warranty"
              peak="Protection"game="https://techcrunch.com/wp-content/uploads/2019/10/SR-Hero_2880x1800.jpg"
              connected="https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8yNzE4NjAzMS9vcmlnaW4uanBnIiwiZXhwaXJlc19hdCI6MTY1MjU2NzcwOH0.SA0E5fT1siyfgcwFvg8huNN8_lQmeR26PZnxV25rhJs/img.jpg?width=1245&quality=85&coordinates=0%2C0%2C0%2C0&height=700"
              audio="https://www.solarreviews.com/content/images/blog/teslacar2.jpg"
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
