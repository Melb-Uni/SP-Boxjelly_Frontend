import React from 'react';
import {Card} from "react-bootstrap";

export default function LatestCard(props) {

    const border = props.border;
    const title = props.title;
    const time = props.time;
    const data = props.data;
    const text = data.map(
      (each) => <Card.Text className="col-sm col-xs-12" key={each} >{each}</Card.Text>
    );
  
    return (
      <div className='m-2'>
        <Card border={border}>
          <Card.Body>
            <Card.Title><small>{title}</small></Card.Title>
            {text}
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">{time}</small>
          </Card.Footer>
        </Card>
      </div>
    );
  }