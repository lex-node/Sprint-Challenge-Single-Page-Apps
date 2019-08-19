import React from "react";
import {Card} from 'semantic-ui-react'
import 'semantic-ui/dist/semantic.min.css';

const LocationCard = (props) => {
    return (
        <Card>
            <Card.Content>
                <Card.Header>{props.location.name}</Card.Header>
                <Card.Description>
                    <li>Type: {props.location.type}</li>
                  <li>Dimension: {props.location.dimension}</li>
                  <li>Residents: {props.location.residents.length}</li>
                </Card.Description>
            </Card.Content>
        </Card>

    )
}

export default LocationCard;
