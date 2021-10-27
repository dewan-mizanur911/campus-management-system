import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';

const AddededService = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/addedServices')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    
    //  Delete an user
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure to delete?');
        if (proceed) {
                    const url = `http://localhost:5000/addedServices/${id}`;
        fetch(url, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(result => {
                if (result.deletedCount > 0) {
                    const restServices = services.filter(service => service._id !== id);
                    setServices(restServices);
            }
        })
        }

    };
    return (
      <div>
        <h2>This is addeded service</h2>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Added Service</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {services.map((service) => (
              <tr key={service._id}>
                <td>{service.firstName.toUpperCase()}</td>
                <td>{service.email}</td>
                <td>{service.service}</td>
                <td>
                  <Button variant="danger" onClick={() => handleDelete(service._id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
};

export default AddededService;