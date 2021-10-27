import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css';

const Services = ({services}) => {
    return (
      <Container>
        <Row xs={1} md={3} lg={4} className="g-4 mb-5 mt-3">
            {
                   services.length ? services?.map(service => <Service
                        key={service._id}
                        service={service}
                   ></Service>)
              :
              <h2 className="my-5 mx-auto">No Results Found</h2>
            }
        </Row>
      </Container>
    );
};

export default Services;