import React from "react";
import DescriptionRight from "./DescriptionRight";
import DescriptionLeft from "./DescriptionLeft";
import game from "../../assets/game.jpg";
import connected from "../../assets/connected.jpg";
import audio from "../../assets/audio.jpg";
import interior from "../../assets/new-interior.jpg";

function Description() {
  return (
    <div style={{ backgroundColor: "#000", padding: '80px 0' }}>
      <DescriptionRight
        title="Game from Anywhere"
        desc="Up to 10 teraflops of processing power enables in-car gaming on-par with today’s newest consoles. Wireless controller compatibility lets you game from any seat."
        img={game}
      />
      <DescriptionLeft
        title="Stay Connected"
        desc="Multi-device Bluetooth, wireless and USB-C charging for every passenger, with enough power to fast-charge your tablets and laptop."
        img={connected}
      />
      <DescriptionRight
        title="Your Best Audio System"
        desc="A 22-speaker, 960-watt audio system with active noise canceling offers the best listening experience at home or on the road."
        img={audio}
      />
      <DescriptionLeft
        title="Real Storage"
        desc="With front and rear trunks and fold-flat seats, Model S is a luxury car where you can fit your bike without taking the wheel off, and your luggage too."
        img={interior}
      />
    </div>
  );
}

export default Description;
