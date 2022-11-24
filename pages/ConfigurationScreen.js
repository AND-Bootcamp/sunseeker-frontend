import React from "react";
import { View, Button, Alert, Text, TextInput, StyleSheet} from "react-native";

const Separator = () => (
  <View style={styles.separator} />
);

const ConfigurationScreen = () => {
  console.log("ConfiguratioScreen 01");
  const [text, onChangeText] = React.useState("Useless Text");

    return (

<View style={{ justifyContent: 'flex-start', alignItems: 'flex-start' }}>
    <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start' }}>
        <Text style={{ fontSize: 24,
            fontWeight: 'bold',
            color: "#FF323C"  }}>Settings</Text>
    </View>
    <Separator />
    <View style={{ justifyContent: 'center', alignItems: 'flex-start',
            padding: 10
            }}>
        <Text style={{ fontSize: 16, color: "#FF323C"   }}>Distance Range: </Text>

        <View style={{
                flexDirection: "row",
                padding: 10
                }}>
            <Text style={{ fontSize: 12, color: "#FF323C" }}>MAXIMUM:</Text>
            <TextInput style={styles.input}
                onChangeText={onChangeText}
                value="25"
                />
            <Text style={{ fontSize: 12, color: "#FF323C" }}>  </Text>
            <Text style={{ fontSize: 12, color: "#FF323C" }}>  Minimum:</Text>
            <TextInput style={styles.input}
                onChangeText={onChangeText}
                value="3"
                />
        </View>
    </View>
    <Separator />
    <View style={{
            flexDirection: "row",
            padding: 10,
            }}>
        <Text style={{ fontSize: 16, color: "#FF323C" }}>Mode: </Text>
        <Text style={{ fontSize: 12, alignItems: 'center' }}>[] Dark / [] Light</Text>

    </View>
    <Separator />
    <View style={{
            flexDirection: "row",
            padding: 10,
            }}>
        <Text style={{ fontSize: 16, color: "#FF323C" }}>UV Level: </Text>
        <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value="LOW"
            />
    </View>
    <Separator />
    <View style={{
            flexDirection: "row",
            padding: 100,
            alignItems: 'flex-end',
        }}>
        <Text> </Text>
        <Button color="#FF323C" background="#FF323C"
            title="Apply Settings"
            onPress={() => Alert.alert('Settings saved')}
            />
    </View>
</View>

    )
};

const styles = StyleSheet.create({
  input: {
    height: 30,
    width: 50,
    margin: 2,
    borderWidth: 2,
    padding: 2, color: "#FF323C"
  },
 separator: {
   marginVertical: 8,
   borderBottomColor: '#737373',
   borderBottomWidth: StyleSheet.hairlineWidth,
 },
});

export default ConfigurationScreen;