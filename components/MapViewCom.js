import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, TextInput, StatusBar, Alert } from "react-native"
import MapView, { Marker, Callout, LocalTile } from 'react-native-maps';
import * as Location from 'expo-location';
import { Entypo, MaterialIcons } from '@expo/vector-icons';
import * as Permissions from 'expo-permissions';
import { Container, Header, Left, Body, Right, Title, Spinner, Button, Icon, Form } from 'native-base';

export default class MapViewCom extends Component {
    constructor(props) {
        super(props)
        this.state = {
            region: null,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            loaded: false,
            locationToAdress: null,
            startLocation: "",
            lastLocation: "",
            lastRegion: null
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
        let locationToAdress = await Location.reverseGeocodeAsync({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude
        })
        const region = {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
        }
        this.setState({ region, locationToAdress });
    }

    onDirectionCreate = async () => {
        if (this.state.lastLocation.trim().length === 0) {
            Alert.alert("Please Enter Target.")
        } else {
            const targetLocation = await Location.geocodeAsync(this.state.lastLocation)
            const region = {
                latitude: targetLocation[0].latitude,
                longitude: targetLocation[0].longitude
            }
            this.setState({
                lastRegion: region
            })
        }
    }

    render() {
        const { locationToAdress } = this.state
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
                                <MapView.Animated
                                    initialRegion={{
                                        latitude: this.state.region.latitude,
                                        longitude: this.state.region.longitude,
                                        latitudeDelta: 0.0922,
                                        longitudeDelta: 0.0421
                                    }}
                                    showsBuildings
                                    zoomControlEnabled={true}
                                    style={styles.mapStyle}>
                                    <Marker coordinate={{
                                        latitude: this.state.region.latitude,
                                        longitude: this.state.region.longitude
                                    }} title={`${locationToAdress[0].city}, ${locationToAdress[0].street}, ${locationToAdress[0].region}`}>
                                        <Entypo name="location-pin" size={50} color={"#8C86E8"} />
                                    </Marker>
                                    {
                                        this.state.lastRegion !== null ? (
                                            <Marker coordinate={{
                                                latitude: this.state.lastRegion.latitude,
                                                longitude: this.state.lastRegion.longitude
                                            }} title={`${locationToAdress[0].city}, ${locationToAdress[0].street}, ${locationToAdress[0].region}`}>
                                                <Entypo name="location-pin" size={50} color={"#8C86E8"} />
                                            </Marker>
                                        ) : (
                                                null
                                            )
                                    }

                                </MapView.Animated>
                                <View style={{
                                    position: 'absolute',
                                    top: 35,
                                    alignSelf: "center"
                                }}>
                                    <TextInput
                                        disableFullscreenUI
                                        onChangeText={text => this.setState({ startLocation: text })}
                                        style={styles.inputStyle}
                                        value={"Your Location"}
                                        placeholder=" First Location"

                                    />
                                    <TextInput
                                        onChangeText={text => this.setState({ lastLocation: text })}
                                        style={styles.inputStyle}
                                        value={this.state.lastLocation}
                                        placeholder=" Last Location"
                                    />
                                    <Button
                                        onPress={this.onDirectionCreate}
                                        style={{ backgroundColor: "#8C86E8", justifyContent: "center", marginTop: 5, alignSelf: "center", width: 100 }}>

                                        <MaterialIcons name="directions" size={25} color={"white"} />
                                        <Text style={{ color: "white", fontSize: 20, marginLeft: 5 }}>
                                            Go
                                        </Text>
                                    </Button>
                                </View>
                                <View style={{
                                    position: 'absolute',
                                    bottom: 120,
                                    alignSelf: "center"
                                }}>
                                    <Button style={{ backgroundColor: "#8C86E8", justifyContent: "center", alignContent: "center", width: 250 }}>
                                        <Entypo name="location" size={20} color={"white"} />
                                        <Text style={{ color: "white", fontSize: 20, marginLeft: 5 }}>
                                            Find
                                        </Text>
                                    </Button>
                                </View>
                            </View>
                        )
                }
                {/* <CustomCollout /> */}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: "100%"
    },
    mapStyle: {
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width
    },
    inputStyle: {
        height: 40,
        width: 250,
        borderRadius: 15,
        borderColor: '#8C86E8',
        borderWidth: 1,
        marginTop: 5,
        opacity: .7,
        backgroundColor: "white"
    }


})