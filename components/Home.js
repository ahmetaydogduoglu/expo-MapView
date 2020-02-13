import React, { Component } from 'react'
import { View, Text, StyleSheet } from "react-native"
import { Container, Header, Left, Body, Right, Title, Spinner } from 'native-base';
import * as Font from 'expo-font';

export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header iosBarStyle="dark-content" style={{backgroundColor:"#8C86E8"}}>

                    <Body>
                        <Title style={{color:"white"}}>Home</Title>
                    </Body>

                </Header>


            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',

    },
})

