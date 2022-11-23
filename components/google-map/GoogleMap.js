import { fetchSunnyLocations } from "../../api/SunnyLocationApi";
import MapView, { Marker } from "react-native-maps";
import { useState, useEffect, useLayoutEffect } from "react";
import { StyleSheet, View, Dimensions, Button, Text } from "react-native";
import axios from "axios";

import { useNavigation } from '@react-navigation/native';

import * as Location from 'expo-location';
import MarkerPin from "./MarkerPin";

const GoogleMap = () => {
    const [location, setLocation] = useState({
        LATITUDE: 52.164610,
        LONGITUDE: 4.481780,
        uvLevel: "HIGH",
    });
    const navigation = useNavigation();
    // const [sunnyLocations, setSunnyLocations] = useState(null);

    // const {loading:sunnyLoading, data} = fetchSunnyLocations(location);
    // console.log(sunnyLoading);
    // console.log(data);



    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    // const { sunnyLocations } = fetchSunnyLocations(location);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Button onPress={() => clearAllMarkers()} title="Clear markers" color="#FF323C" />
            )
        })
    }, [navigation])

    useEffect(() => {
        (async () => {
            setLoading(true);
            let { status } = await Location.requestForegroundPermissionsAsync();

            if (status !== 'granted') {
                setErrorMessage('Permission to access location was denied');
                setLoading(false);
                return;
            }

            /*
                Since we are using an emulated device, the LAT and LONG will be hardcoded. Otherwise the device will be located in the USA. 
                Below should take over the constants once the app is deployed to an actual device.
            */
            // let location = await Location.getCurrentPositionAsync({});
            // let {latitude, longitude} = location.coords;
            // setLocation({LATITUDE:latitude, LONGITUDE:longitude});

            setLoading(false);
        })();
    }, []);

    let text = 'Loading...';
    if (errorMessage) {
        text = errorMessage;
    } else if (location) {
        text = JSON.stringify(location);
    }

    // useEffect(() => {
    //     setLoading(true);
    //     let {LATITUDE, LONGITUDE} = location;

    //     let fetchLocations = async () => {
    //         const response = await fetchSunnyLocations(LATITUDE, LONGITUDE);
    //         return response;
    //     }

    //     let fetchedLocations = fetchLocations(LATITUDE, LONGITUDE)
    //     .then(() => setSunnyLocations(fetchedLocations))
    //     .catch(console.error);
    //     setLoading(false);
    // }, [location]);

    /*
        Location fetching is disabled for now. Otherwise it would fetch on every reload, and we will run through our daily limit fast.
    */

    // const fetchSunnyLocations = (location) => {
    //     let { LATITUDE, LONGITUDE} = location;
    //     setLoading(true);
    //     const BASE_URL = `http://localhost:8080/sun-seeker/?lat=${LATITUDE}&lon=${LONGITUDE}`;
    //     axios.get(
    //         BASE_URL,
    //     )
    //     .then((response) => {
    //         setSunnyLocations([...response.data.alternatives]);
    //         setLoading(false);
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //         setLoading(false);
    //     });
    // };

    // useEffect(() => {
    //     fetchSunnyLocations(location);
    // }, []);

    const clearAllMarkers = () => {
        setLoading(true);
        // if (sunnyLocations && sunnyLocations.length >= 1) {
        //     setSunnyLocations(null);
        //     isLoading(false);
        // }
        setLoading(false);
    };

    return (
        <View style={styles.container}>
            {!loading && (
                <MapView 
                style={styles.map}
                initialRegion={{
                    latitude: location.LATITUDE,
                    longitude: location.LONGITUDE,
                    latitudeDelta: 0.06,
                    longitudeDelta: 0.06,
                }}
                loadingEnabled={true}
                showsUserLocation={true}
                showsMyLocationButton={true}
                followsUserLocation={true}
                pitchEnabled={true}
                // onPress={() => console.log(sunnyLocations)}
                > 
                    <MarkerPin
                        index={1}
                        lat={location.LATITUDE}
                        lon={location.LONGITUDE}
                        uvLevel={location.uvLevel}
                     />
                    {/* {!loading && sunnyLocations && sunnyLocations.length > 0
                    ? 
                    sunnyLocations.map((sunnyLocation, index) => {
                        const { lat, lon, uvLevel } = sunnyLocation.coordination;
                        console.log(lat, lon, uvLevel);
                        return (
                        <Marker
                            key={index}
                            coordinate={{
                                latitude: lat,
                                longitude: lon,
                            }}
                            title={uvLevel}
                            description={uvLevel}
                            onPress={() => handleInfoMenu(info)}
                            >
                        </Marker>
                        )
                    })
                    : null
                    } */}
             </MapView>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      map: {
        width: Dimensions.get('window').width,
        height: `100%`,
      },
});

export default GoogleMap;