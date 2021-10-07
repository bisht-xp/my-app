import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const loginscreen = () => {
    return (
        <View style = {styles.container}>
            <Text>Login Screen</Text>
            <Button title = "Click Here"
            onpress = {() => alert('Button Clicked!')} />
        </View>
    );
};
export default loginscreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});