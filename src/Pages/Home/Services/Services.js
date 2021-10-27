import { Container, Row } from 'react-bootstrap';
import useServices from '../../../hooks/useServices';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const { services } = useServices();
    return (
      <Container>
        <Row xs={1} md={3} lg={4} className="g-4 my-5">
            {
                   services.length && services?.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
            }
        </Row>
      </Container>
    );
};

export default Services;