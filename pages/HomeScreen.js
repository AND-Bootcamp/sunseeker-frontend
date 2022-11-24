import React, { useLayoutEffect } from "react";
import { View, Text, Button } from "react-native";
import GoogleMap from "../components/google-map/GoogleMap";
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <Button onPress={() => console.log("hello")} title="Get locations" color="#FF323C" />
            )
        })
    }, [navigation])


    return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <GoogleMap />
    </View>
    )
};

export default HomeScreen;