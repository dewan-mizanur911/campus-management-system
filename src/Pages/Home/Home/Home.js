import React, {useState, useEffect} from 'react';
import SearchBox from '../SearchBox/SearchBox';
import Services from '../Services/Services';

const Home = () => {
        const [services, setServices] = useState({});
        useEffect(() => {
        //   fetch("https://campus-management-server.herokuapp.com/services")
          fetch("https://campus-management-server.herokuapp.com/services")
            .then((res) => res.json())
            .then((data) => {
              setServices(data);
              setSearched(data);
            });
        }, []);
    const [searched, setSearched] = useState([]);
        const handleOnSearch = (e) => {
            const newItems = services.filter(service => service.name.toLowerCase().includes(e.target.value.toLowerCase()));
            setSearched(newItems);
        };
    return (
        <div>
            <SearchBox handleOnSearch={handleOnSearch}></SearchBox>
            <Services services={searched}></Services>
        </div>
    );
};

export default Home;