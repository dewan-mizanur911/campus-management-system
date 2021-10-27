import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import SingleAddedService from '../SingleAddedService/SingleAddedService';

const AddededService = () => {
    const [newServices, setServices] = useState([]);
    useEffect(() => {
        fetch("https://campus-management-server.herokuapp.com/addedServices")
          .then((res) => res.json())
          .then((data) => setServices(data));
    }, []);
    
    //  Delete an user
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure to delete?');
        if (proceed) {
                    const url = `https://campus-management-server.herokuapp.com/${id}`;
        fetch(url, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(result => {
                if (result.deletedCount > 0) {
                    const restServices = newServices.filter(service => service._id !== id);
                    setServices(restServices);
            }
        })
        }

    };
    return (
      <div>
        <h2>This is addeded service</h2>
        <Container>
          <Row xs={1} md={2} lg={3} className="g-4">
            {newServices.map((service) => (
              <SingleAddedService
                key={service._id}
                handleDelete={handleDelete}
                service={service}
              ></SingleAddedService>
            ))}
          </Row>
        </Container>
      </div>
    );
};

export default AddededService;