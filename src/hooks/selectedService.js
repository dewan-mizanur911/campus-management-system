import { useEffect, useState } from "react";

const useSelectedServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://campus-management-server.herokuapp.com/services")
    // fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
    const useService = (id) => {
        const service = services.length && services.find((svc) => svc._id === id);
        return service;
    }
  return { services, setServices, useService };
};

export default useSelectedServices;