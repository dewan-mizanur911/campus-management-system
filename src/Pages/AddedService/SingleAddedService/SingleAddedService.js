import React from 'react';
import './SingleAddedService.css';
import { Button, Card, Col, Spinner } from "react-bootstrap";
import useServices from '../../../hooks/useServices';

const SingleAddedService = ({ service, handleDelete }) => {
    const { services } = useServices();
    const newService = services.find(svc => svc.name === service.service);
    return (
      <Col>
        {newService?._id ? (
          <Card>
            <Card.Img variant="top" src={newService?.picture} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Button
                variant="danger"
                onClick={() => handleDelete(service._id)}
              >
                Delete
              </Button>
            </Card.Body>
          </Card>
        ) : (
          <Spinner animation="border" variant="dark" />
        )}
      </Col>
    );
};

export default SingleAddedService;
