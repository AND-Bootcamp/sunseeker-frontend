import React from "react";
import { View, Text } from "react-native";
import GoogleMap from "../components/google-map/GoogleMap";

const HomeScreen = () => {
    return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <GoogleMap />
    </View>
    )
};

export default HomeScreen;