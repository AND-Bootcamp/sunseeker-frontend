import { fetchSunnyLocations } from "../../api/SunnyLocationApi";
import { useState, useEffect, useLayoutEffect } from "react";
import { StyleSheet, View, Dimensions, Button, Text, Linking } from "react-native";
import { useNavigation } from '@react-navigation/native';

import * as Location from 'expo-location';
import MarkerPin from "./MarkerPin";
import MapView from "react-native-maps";

const widthConst = Dimensions.get('screen').width;

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
    const [status, setStatus] = useState(null);

    console.log("Google Map 03");

    const requestLocationPermissions = async () => {
        setLoading(true);
        let { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== 'granted') {
            console.log(status);
            setErrorMessage('Permission to access location was denied');
            setLoading(false);
            return;
        }

        setStatus(status);
        setLoading(false);
    }

    useEffect(() => {
        let { status } = Location.hasServicesEnabledAsync();
        console.log(status);
        setStatus(status);
    }, []);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                status !== 'granted' 
                ?
                <Button title="Refresh app" color="#FF323C" onPress={() => requestLocationPermissions()} />
                :
                <Button title="Clear markers" color="#FF323C" />
            )
        })
    }, [navigation])

    console.log("Google Map 04");

    useEffect(() => {
        requestLocationPermissions();
    }, [status]);



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

    const goToSettings = () => {
        Linking.openSettings();
    };

    return (
        <View style={styles.container}>
            {!loading && status == 'granted' ? (
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
            ) : (
                <>
                    <Text>We need acces to your location for the app to work.</Text>
                    <Button 
                        title="Open settings"
                        onPress={() => goToSettings()}
                        style={{color: '#FF323C'}}
                    />
                </>
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
      scrollContainer: {
        flex: 1,
        width: widthConst,
        alignContent: "center",
      },
      map: {
        width: Dimensions.get('window').width,
        height: `100%`,
      },
});

export default GoogleMap;