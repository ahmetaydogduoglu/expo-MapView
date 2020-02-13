import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, TextInput } from "react-native"
import MapView, { Marker, Callout } from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { Container, Header, Left, Body, Right, Title, Spinner, Button } from 'native-base';
import * as Font from 'expo-font';

export default class MapViewCom extends Component {
    constructor(props) {
        super(props)
        this.state = {
            region: null,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            loaded: false
        }
    }
    async componentDidMount() {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            this.setState({
                errorMessage: 'Permission to access location was denied',
            });
        }
        let location = await Location.getCurrentPositionAsync({});
        const region = {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
        }
        this.setState({ region });
    }

    render() {
        return (
            <View style={styles.container}>
                <Header style={{ backgroundColor: "#8C86E8" }}>
                    <Body>
                        <Title style={{ color: "white" }}>Map</Title>
                    </Body>
                </Header>
                {
                    this.state.region === null ? (
                        <Spinner style={{ marginTop: 150 }} color="#8C86E8" />
                    ) : (
                            <View>
                                <MapView
                                    initialRegion={{
                                        latitude: this.state.region.latitude,
                                        longitude: this.state.region.longitude,
                                        latitudeDelta: 0.0922,
                                        longitudeDelta: 0.0421
                                    }}
                                    style={styles.mapStyle}
                                >
                                    <Marker
                                        coordinate={{
                                            latitude: this.state.region.latitude,
                                            longitude: this.state.region.longitude
                                        }}
                                        title={"Your Location"}
                                    />
                                </MapView>
                                <Callout>
                                    <View style={{
                                        justifyContent: "center",
                                        alignContent: "center",
                                        alignSelf:"center"
                                    }}>
                                        <Button style={styles.findButton}><Text style={{color:"white",fontWeight:"500",fontSize:17,margin:4}}> Find Location </Text></Button>


                                    </View>
                                </Callout>
                            </View>
                        )
                }
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        display: "flex",
        height: "100%",
        flex: 1
    },
    mapStyle: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
        justifyContent: "center",
        alignContent: "center",
    },

    findButton: {
       borderRadius:15,
       backgroundColor:"#8C86E8",
       alignSelf:"center"
    }
})