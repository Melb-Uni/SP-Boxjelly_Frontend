import React from 'react';
import {Card, CardGroup} from "react-bootstrap";

export default function LatestCardGroup(props) {

    const borders = props.borders;
    const titles = props.titles;
    const times = props.times;
    const data = props.data;


    const cards = titles.map(
      (title, index) => 
        <div key={title} className='m-2'>
            <Card border={borders[index]}>
            <Card.Body>
                <Card.Title><small>{title}</small></Card.Title>
                {data[index].map(
                    (each) => <Card.Text className="col-sm col-xs-12" key={each} >{each}</Card.Text>
                )}
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">{times[index]}</small>
            </Card.Footer>
            </Card>
        </div>
    );
  
    return (
        <CardGroup>
            {cards}
        </CardGroup>
    );
  }