import React, { useLayoutEffect } from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from '@react-navigation/native';

const ConfigurationScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <Button onPress={() => console.log("hello")} title="Show my history" color="#FF323C" />
            )
        })
    }, [navigation])

    return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Profile!</Text>
    </View>
    )
};

export default ConfigurationScreen;