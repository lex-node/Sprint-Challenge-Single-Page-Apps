import React from "react";

const CharacterCard = (props) => {
    return (
        <div>
            <h2>{props.character.name}</h2>
            <img src={props.character.image} alt={props.character.name}/>
            <li>Name: {props.character.name}</li>
            <li>Status: {props.character.status}</li>
            <li>Species: {props.character.species}</li>
            <li>Type: {props.character.type}</li>
            <li>Gender: {props.character.gender}</li>
            <li>Origin: {props.character.origin.name}</li>
            <li>Location: {props.character.location.name}</li>
        </div>

    )
}

export default CharacterCard;
