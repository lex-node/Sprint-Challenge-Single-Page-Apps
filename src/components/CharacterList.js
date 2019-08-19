import React, {useEffect, useState} from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import {Card} from 'semantic-ui-react'
import 'semantic-ui/dist/semantic.min.css';
/*import SearchForm from "./SearchForm";*/

const CharacterList = (props) => {
    const [characterList, setCharacterList] = useState([]);

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


    return (
        <Card.Group itemsPerRow={2}>
            {characterList.map(character => {
                return (
                    <CharacterCard character={character}/>
                )
            })}
        </Card.Group>

    );
}

export default CharacterList;

