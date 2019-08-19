import React from "react";
import {Route} from "react-router-dom";
import CharacterList from "./components/CharacterList";
import LocationsList from "./components/LocationsList";
import EpisodeList from "./components/EpisodeList";
import WelcomePage from "./components/WelcomePage";

export default function App() {
  return (
    <main>
        <WelcomePage/>
        <CharacterList/>
        <LocationsList/>
        <EpisodeList/>
    </main>
  );
}

