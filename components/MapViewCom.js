import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions } from "react-native"
import MapView from 'react-native-maps';
import { Marker } from "react-native-maps"
export default class MapViewCom extends Component {
    constructor(props) {
        super(props)
        this.state = {
            region: null
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={{ textAlign: "center", fontSize: 30, marginTop: 19 }}>Map</Text>
                <MapView
                    style={styles.mapStyle}
                    initialRegion={{
                        latitude: 40,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    mapStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
})