import "./App.css";
import Header from "./components/Header";
import Section from "./components/Section";
import modelS from "./assets/model-s.jpg";
import model3 from "./assets/model-3.jpg";
import modelX from "./assets/model-x.jpg";
import modelY from "./assets/model-y.jpg";

function App() {
  return (
    <div className="App">
      <Header />
      <Section
        backgroundImg={modelS}
        title="Model S"
        desc="Order Online for Touchless Delivery"
        leftBtn="custom order"
        rightBtn="learn More"
      />
      <Section
        backgroundImg={modelX}
        title="Model X"
        desc="Order Online for Touchless Delivery"
        leftBtn="custom order"
        rightBtn="learn More"
      />
      <Section
        backgroundImg={modelY}
        title="Model Y"
        desc="Order Online for Touchless Delivery"
        leftBtn="custom order"
        rightBtn="learn More"
      />
      <Section
        backgroundImg={model3}
        title="Model 3"
        desc="Order Online for Touchless Delivery"
        leftBtn="custom order"
        rightBtn="learn More"
      />
    </div>
  );
}

export default App;
