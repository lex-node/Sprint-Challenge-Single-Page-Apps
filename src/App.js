import React from "react";
import {Route} from "react-router-dom";
import CharacterList from "./components/CharacterList";
import LocationsList from "./components/LocationsList";
import EpisodeList from "./components/EpisodeList";

export default function App() {
  return (
    <main>
        <CharacterList/>
        <LocationsList/>
        <EpisodeList/>
    </main>
  );
}

