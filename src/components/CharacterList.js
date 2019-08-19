import React, {useEffect, useState} from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import {Card} from 'semantic-ui-react'
import 'semantic-ui/dist/semantic.min.css';

const CharacterList = (props) => {
    const [characterList, setCharacterList] = useState([]);
    const [locationList, setLocationList] = useState([]);
    const [episodeList, setEpisodeList] = useState([]);


    useEffect(() => {
        axios
            .get("https://rickandmortyapi.com/api/character/")
            .then(response => {
                console.log(response.data.results);
                setCharacterList(response.data.results);
            })
            .catch(error => {
                console.error(error);
            });

    }, []);

    useEffect(() => {
        axios
            .get("https://rickandmortyapi.com/api/location/")
            .then(response => {
                console.log(response.data.results);
                setLocationList(response.data.results);
            })
            .catch(error => {
                console.error(error);
            });

    }, []);

    useEffect(() => {
        axios
            .get("https://rickandmortyapi.com/api/episode/")
            .then(response => {
                console.log(response.data.results);
                setEpisodeList(response.data.results);
            })
            .catch(error => {
                console.error(error);
            });

    }, []);

    return (
        <Card.Group className="character-list grid-view" itemsPerRow={2}>
            {characterList.map(character => {
                return (
                    <CharacterCard character={character}/>
                )
            })}
        </Card.Group>

    );
}

export default CharacterList;

/*


/*### Part 1

Construct a Single Page Application with React incorporating multiple components.

Keep your components separate and design them before adding in your Router.

You can test them individually before adding in the Router ([Part 2](#part-2)).

Create 3 page components to display data from 3 API endpoints:


- `https://rickandmortyapi.com/api/location/` - [`docs`](https://rickandmortyapi.com/documentation/#get-all-locations)
- `https://rickandmortyapi.com/api/episode/` - [`docs`](https://rickandmortyapi.com/documentation/#get-all-episodes)

- [X] Read the [Rick & Morty API](https://rickandmortyapi.com/documentation/) docs.
- [ ] Create a component to show a grid of data from the API.
  - [X] Include `useState`, `useEffect`.
  - [ X] Use `Axios` (or `fetch`) to make a GET request to the 3 endpoints.
  - [X] Display API results using a [card](https://react.semantic-ui.com/views/card/#content-image-card) grid or
  [list](https://react.semantic-ui.com/elements/list/#content-icon) UI on the page.
  - [ ] Design each 'page' layout based on the available fields.
  (See docs for [schema](https://rickandmortyapi.com/documentation/#character-schema) details.)
  - [ ] Use a styling or component library. (Pick at least 1 of:
   [Semantic-UI](https://react.semantic-ui.com), [ReactStrap](https://reactstrap.github.io), [Material-UI](https://material-ui.com/),
   [styled components](https://www.styled-components.com/), [emotion](https://emotion.sh/docs/introduction)).
  - [ ] Before adding routing, 'spot' check each component manually by importing into `App.js` and adding to JSX.

> 💡**Reminder:** `git commit -am 'Part 1 Completed'`*/

/*const Movie = (props) => {
    const [movie, setMovie] = useState({stars:[]});

    useEffect(() => {
        const id = props.match.params.id;
        // change ^^^ that line and grab the id from the URL
        // You will NEED to add a dependency array to this effect hook

        axios
            .get(`http://localhost:5000/api/movies/${id}`)
            .then(response => {
                setMovie(response.data);
            })
            .catch(error => {
                console.error(error);
            });

    }, []);

    // Uncomment this only when you have moved on to the stretch goals
    // const saveMovie = () => {
    //   const addToSavedList = props.addToSavedList;
    //   addToSavedList(movie)
    // }

    if (!movie) {
        return <div>Loading movie information...</div>;
    }

    const {title, director, metascore, stars} = movie;
    console.log(movie.stars);

    return (
        <div className="save-wrapper">
            <MovieCard key={movie.id} movie={movie} />
            <div className="save-button">Save</div>
        </div>
    );
}

export default Movie;*/