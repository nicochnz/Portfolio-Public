import ReactFullpage from "@fullpage/react-fullpage";
import React from "react";
import "./App.css";
import ContactForm from "./Form/Form";
import HomeSection from "./HomeSection/HomeSection";
import FirstProject from "./Project-1/FirstProject";
import SecondProject from "./Project-2/SecondProject";
import Fireworks from "./Bonus-2/Fireworks";
export default function App() {
  return (
    <ReactFullpage
      navigation={true}
      navigationPosition="right"
      navigationTooltips={[
        "Accueil",
        "Projet 1",
        "Projet 2",
        "Bonus-1",
        "Bonus-2",
        "Contact",
      ]}
      showActiveTooltip={true}
      credits={{ enabled: false }}
      scrollingSpeed={1000}
      render={() => (
        <div id="fullpage-wrapper">
          <HomeSection />
          <FirstProject />
          <SecondProject />
          <Fireworks />
          <ContactForm />
        </div>
      )}
    />
  );
}
