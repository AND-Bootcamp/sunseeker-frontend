import axios from 'axios';

class SunnyLocationsService {
    async fetchLocations(LATITUDE, LONGITUDE) {
        const API_URL = `http://localhost:8080/sun-seeker/?lat=${LATITUDE}&lon=${LONGITUDE}`;
        try {
            return await axios.get(API_URL);
        } catch (errorMessage) {
            return errorMessage;
        }
    };
};

export default new SunnyLocationsService();