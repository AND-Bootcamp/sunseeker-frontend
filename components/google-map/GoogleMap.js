import { fetchSunnyLocations } from "../../api/SunnyLocationApi";
import { useState, useEffect, useLayoutEffect } from "react";
import { StyleSheet, View, Dimensions, Button } from "react-native";
import { useNavigation } from '@react-navigation/native';

import * as Location from 'expo-location';
import MarkerPin from "./MarkerPin";
import MapView from "react-native-maps";

const GoogleMap = () => {
    const [location, setLocation] = useState({
        LATITUDE: 52.36646,
        LONGITUDE: 4.880355,
        uvLevel: "HIGH",
    });
    const navigation = useNavigation();
    const {loading:sunnyLoading, data, error} = fetchSunnyLocations(location);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    console.log("Google Map 03");

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Button title="Clear markers" color="#FF323C" />
            )
        })
    }, [navigation])

    console.log("Google Map 04");

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

    console.log("Google Map 05");

    let text = 'Loading...';
    if (errorMessage) {
        console.log("Google Map 05.1");
        console.log("--------------------");
        console.log(errorMessage);
        console.log("--------------------");
        text = errorMessage;
    } else if (location) {
        console.log("Google Map 05.2");
        text = JSON.stringify(location);
    }

    console.log("Google Map 09");

    return (
        <View style={styles.container}>
            {!loading && (
                <MapView 
                style={styles.map}
                initialRegion={{
                    latitude: location.LATITUDE,
                    longitude: location.LONGITUDE,
                    latitudeDelta: 0.2,
                    longitudeDelta: 0.2,
                }}
                loadingEnabled={true}
                showsUserLocation={true}
                showsMyLocationButton={true}
                followsUserLocation={true}
                pitchEnabled={true}
                > 
                {!sunnyLoading && data 
                ?
                data.alternatives.map((sunnyLocation, index) => {
                    const {coordinates: {lon, lat}} = sunnyLocation;
                    const {uvDetail: {uvLevel, uvValue}} = sunnyLocation;
                    return (
                        <MarkerPin
                            key={index}
                            lat={lat}
                            lon={lon}
                            uvLevel={uvLevel}
                            uvValue={uvValue}
                            location={location}
                            />
                    )
                })
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