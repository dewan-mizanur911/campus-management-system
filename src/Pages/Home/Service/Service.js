import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { picture, name, _id } = service;
    return (
      <Col>
        <Card as={Link} to={`/service/${_id}`}>
          <Card.Img variant="top" src={picture} height="230px" />
          <Card.Body className="card-body">
            <Card.Title
              className=""
            >
              {name}
            </Card.Title>
          </Card.Body>
        </Card>
      </Col>
    );
};

export default Service;