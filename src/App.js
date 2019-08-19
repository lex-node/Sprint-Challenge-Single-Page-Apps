import React from "react";
import {Route} from "react-router-dom";
import CharacterList from "./components/CharacterList.js";
import LocationsList from "./components/LocationsList.js";

export default function App() {
  return (
    <main>
        <CharacterList/>
        <LocationsList/>
    </main>
  );
}

