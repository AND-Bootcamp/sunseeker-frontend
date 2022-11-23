import axios from 'axios';

const BASE_URL = "http://localhost:8080/sun-seeker/"

const fetchSunnyLocations = (LATITUDE, LONGITUDE) => {
    const BASE_URL = `${BASE_URL}?lat=${LATITUDE}&lon=${LONGITUDE}`;
    axios.get(
        BASE_URL,
    )
    .then((response) => {
        return [...response.data.alternatives];
    })
    .catch((error) => {
        console.log(error);
    });
};

export {fetchSunnyLocations}