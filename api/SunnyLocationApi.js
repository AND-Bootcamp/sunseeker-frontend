import axios from 'axios';
import { useState, useEffect } from 'react';

const BASE_URL = "http://localhost:8080/sun-seeker/"

const fetchSunnyLocations = (location) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    let {LATITUDE, LONGITUDE} = location;
    const url = `${BASE_URL}?lat=${LATITUDE}&lon=${LONGITUDE}`;

    useEffect(() => {
        axios.get(url)
        .then(response => setData(response.data))
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    }, []);

    return { loading, data, error }
};

export {fetchSunnyLocations}