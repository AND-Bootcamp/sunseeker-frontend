import axios from 'axios';

import react, { useState, useEffect } from 'react';

const BASE_URL = "http://localhost:8080/sun-seeker/"

const fetchSunnyLocations = (location) => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState(null)
    let {LATITUDE, LONGITUDE} = location;
    const url = `${BASE_URL}?lat=${LATITUDE}&lon=${LONGITUDE}`;
    
    const fetchApi = () => {
        axios.get(url)
        .then(response => {
            return response.json()
        })
        .then(json => {
            console.log(json)
            setLoading(false)
            setData(json)
        })
        .catch((error) => {
            console.log(error);
        });
    };

    useEffect(() => {
        fetchApi();
    }, []);

    return { loading, data }
};

export {fetchSunnyLocations}