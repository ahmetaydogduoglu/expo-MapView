import React, { Component } from 'react'
import { View, Text, StyleSheet } from "react-native"
import { Container, Header, Left, Body, Right, Title, Spinner } from 'native-base';
import * as Font from 'expo-font';

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isReady: false
        }
    }
    async componentDidMount() {
        await Font.loadAsync({
            Roboto: require('native-base/Fonts/Roboto.ttf'),
            Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
            ...Ionicons.font,
        });
        this.setState({ isReady: true });
    }
    render() {
        return (
            <View style={styles.container}>
                <Header iosBarStyle="dark-content" style={{ backgroundColor: "#8C86E8" }}>
                    <Body>
                        <Title style={{ color: "white" }}>Home</Title>
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

