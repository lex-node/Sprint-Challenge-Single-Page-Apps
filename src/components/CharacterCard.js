import React from "react";
import {Card, Image} from 'semantic-ui-react'
import 'semantic-ui/dist/semantic.min.css';

const CharacterCard = (props) => {
    return (
        <Card>
            <Image src={props.character.image} alt={props.character.name}/>
            <Card.Content>
                <Card.Header>{props.character.name}</Card.Header>
                <Card.Description>
                    <li>Name: {props.character.name}</li>
                    <li>Status: {props.character.status}</li>
                    <li>Species: {props.character.species}</li>
                    <li>Type: {props.character.type}</li>
                    <li>Gender: {props.character.gender}</li>
                    <li>Origin: {props.character.origin.name}</li>
                    <li>Location: {props.character.location.name}</li>
                </Card.Description>
            </Card.Content>
        </Card>

    )
}

export default CharacterCard;
