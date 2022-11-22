import MapView, { Marker } from "react-native-maps";
import { useState, useEffect } from "react";
import { StyleSheet, View, Dimensions } from "react-native";

import * as Location from 'expo-location';

const GoogleMap = () => {
    const [location, ] = useState({
        LATITUDE: null,
        LONGITUDE: null,
    });
    const [loading, isLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const LATITUDE = 52.164610;
    const LONGITUDE = 4.481780;

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
            let location = await Location.getCurrentPositionAsync({});
            location.LATITUDE = location.coords.latitude;
            location.LONGITUDE = location.coords.longitude;

            isLoading(false);
        })();
    }, []);

    let text = 'Loading...';
    if (errorMessage) {
        text = errorMessage;
    } else if (location) {
        text = JSON.stringify(location);
    }

    const sunnyLocations = [
        {
            latitude: 52.163607,
            longitude: 4.507136,
            title: "Test Park",
            subtitle: "Test park voor de marker"
        }
    ];



    return (
        <View style={styles.container}>
            {!loading && (
                <MapView 
                style={styles.map}
                provider="google"
                initialRegion={{
                    latitude: LATITUDE,
                    longitude: LONGITUDE,
                    latitudeDelta: 0.1,
                    longitudeDelta: 0.1,
                }}
                loadingEnabled={true}
                showsUserLocation={true}
                showsMyLocationButton={true}
                followsUserLocation={true}
                pitchEnabled={true}
                >
                    { sunnyLocations && sunnyLocations.map((sunnyLocation, index) => (
                        <Marker
                        key={index}
                        coordinate={{
                            latitude: sunnyLocation.latitude,
                            longitude: sunnyLocation.longitude,
                        }}
                        title={sunnyLocation.title}
                        description={sunnyLocation.subtitle}
                        />
                    ) )}
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
        height: Dimensions.get('window').height,
      },
});

export default GoogleMap;