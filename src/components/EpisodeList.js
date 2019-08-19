import React, {useEffect, useState} from "react";
import axios from "axios";
import EpisodeCard from "./EpisodeCard";
import {Card} from 'semantic-ui-react'
import 'semantic-ui/dist/semantic.min.css';
/*import SearchForm from "./SearchForm";*/

const EpisodeList = (props) => {
    const [episodeList, setEpisodeList] = useState([]);

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
        <Card.Group itemsPerRow={2}>
            {episodeList.map(episode => {
                return (
                    <EpisodeCard episode={episode}/>
                )
            })}
        </Card.Group>

    );
}

export default EpisodeList;

