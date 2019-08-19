import React, {useEffect, useState} from "react";
import axios from "axios";
import LocationCard from "./LocationCard";
import {Card} from 'semantic-ui-react'
import 'semantic-ui/dist/semantic.min.css';
/*import SearchForm from "./SearchForm";*/

const LocationsList = (props) => {

    const [locationsList, setLocationsList] = useState([]);


    useEffect(() => {
        axios
            .get("https://rickandmortyapi.com/api/location/")
            .then(response => {
                console.log(response.data.results);
                setLocationsList(response.data.results);
            })
            .catch(error => {
                console.error(error);
            });

    }, []);

    return (
        <Card.Group itemsPerRow={2}>
            {locationsList.map(location => {
                return (
                    <LocationCard location={location}/>
                )
            })}
        </Card.Group>

    );
}

export default LocationsList;

