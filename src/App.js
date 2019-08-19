import React from "react";
import {Route} from "react-router-dom";
import CharacterList from "./components/CharacterList";
import LocationsList from "./components/LocationsList";
import EpisodeList from "./components/EpisodeList";
import WelcomePage from "./components/WelcomePage";
import Header from "./components/Header";
import TabNav from "./components/TabNav";

export default function App() {
  return (
    <main>
        <div className="container">
            <Header/>
            <TabNav/>
        </div>
       <Route exact path="/" component={WelcomePage}/>
       <Route exact path="/characters" component={CharacterList}/>
       <Route exact path="/locations" component={LocationsList}/>
       <Route exact path="/episodes" component={EpisodeList}/>
    </main>
  );
}

