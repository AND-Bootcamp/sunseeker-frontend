import MapView, { Marker } from "react-native-maps";
<<<<<<< HEAD
import { useState, useEffect } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import axios from 'axios';
import SunnylocationsService from "../../services/Sunnylocations.service";
=======
import { useState, useEffect, useLayoutEffect } from "react";
import { StyleSheet, View, Dimensions, Button } from "react-native";
>>>>>>> origin/main

import { useNavigation } from '@react-navigation/native';

import GlobalStyles from '../../css-variables/Constants';
import * as Location from 'expo-location';

const GoogleMap = () => {
    const [location, ] = useState({
        LATITUDE: null,
        LONGITUDE: null,
    });
<<<<<<< HEAD
    const [sunnyLocations, setSunnyLocations] = useState([]);
=======
    const [sunnyLocations, setSunnyLocations] = useState(null);
    const [testLocation, setTestLocation] = useState([
        {
            latitude: 52.163607,
            longitude: 4.507136,
            title: "Test Park",
            subtitle: "Test park voor de marker"
        }
    ])
>>>>>>> origin/main
    const [loading, isLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const LATITUDE = 52.164610;
    const LONGITUDE = 4.481780;

<<<<<<< HEAD
    const getSunnyLocations = (LATITUDE, LONGITUDE) => {
        isLoading(true);
        SunnylocationsService.fetchLocations(LATITUDE, LONGITUDE)
        .then((response) => {
            setSunnyLocations(response.data);
        })
        .finally(() => isLoading(false))
        .catch((error) => console.log(error));
    }

=======
    const navigation = useNavigation();

    const clearAllMarkers = () => {
        isLoading(true);
        if (testLocation && testLocation.length >= 1) {
            setTestLocation(null);
        }

        console.log(testLocation);
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Button onPress={() => clearAllMarkers()} title="Clear markers" color="#FF323C" />
            )
        })
    }, [navigation])

>>>>>>> origin/main
    useEffect(() => {
        (async () => {
            isLoading(true);
            let { status } = await Location.requestForegroundPermissionsAsync();

            if (status !== 'granted') {
                setErrorMessage('Permission to access location was denied');
                isLoading(false);
                return;
            }

            /*
                Since we are using an emulated device, the LAT and LONG will be hardcoded. Otherwise the device will be located in the USA. 
                Below should take over the constants once the app is deployed to an actual device.
            */
            // let location = await Location.getCurrentPositionAsync({});
            // location.LATITUDE = location.coords.latitude;
            // location.LONGITUDE = location.coords.longitude;

            isLoading(false);
        })();
<<<<<<< HEAD
        getSunnyLocations(LATITUDE, LONGITUDE);
    }, []);
=======
    }, [testLocation]);
>>>>>>> origin/main

    let text = 'Loading...';
    if (errorMessage) {
        text = errorMessage;
    } else if (location) {
        text = JSON.stringify(location);
    }

<<<<<<< HEAD
    const testLocation = [
        {
            latitude: 52.163607,
            longitude: 4.507136,
            title: "Test Park",
            subtitle: "Test park voor de marker"
        }
    ];



=======
>>>>>>> origin/main
    return (
        <View style={styles.container}>
            {!loading && (
                <MapView 
                style={styles.map}
                initialRegion={{
                    latitude: LATITUDE,
                    longitude: LONGITUDE,
                    latitudeDelta: 0.05,
                    longitudeDelta: 0.05,
                }}
                loadingEnabled={true}
                showsUserLocation={true}
                showsMyLocationButton={true}
                followsUserLocation={true}
                pitchEnabled={true}
                onPress={() => console.log(sunnyLocations)}
                >
                    { testLocation && testLocation.length >= 1
                    ? 
                    testLocation.map((sunnyLocation, index) => (
                        <Marker
                        key={index}
                        coordinate={{
                            latitude: sunnyLocation.latitude,
                            longitude: sunnyLocation.longitude,
                        }}
                        title={sunnyLocation.title}
                        description={sunnyLocation.subtitle}
                        />
                    )) 
                    : null
                    }
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