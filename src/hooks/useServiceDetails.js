import { useEffect, useState } from "react";

const useServiceDetails = (serviceId) => {
  const [serices, setServices] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/service/${serviceId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [serviceId]);
  return [serices];
};

export default useServiceDetails;
