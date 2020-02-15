import React, { Component } from 'react'
import { View, StyleSheet, Text } from "react-native"
import { Container, Header, Left, Body, Right, Title, Button, Spinner } from 'native-base';
export default class CustomCollout extends Component {
    render() {
        return (
            <View >
                <View style={{ flexDirection: "row",marginBottom:12 , justifyContent: "space-evenly", width: "100%" }}>
                    <Button style={styles.findButton}><Text style={{ color: "white", fontWeight: "500", fontSize: 17, margin: 4 }}> Find Your Location </Text></Button>
                    <Button style={styles.findButton}><Text style={{ color: "white", fontWeight: "500", fontSize: 17, margin: 4 }}> Find Adress </Text></Button>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    findButton: {
        borderRadius: 15,
        backgroundColor: "#8C86E8",
        alignSelf: "center",
    }
})