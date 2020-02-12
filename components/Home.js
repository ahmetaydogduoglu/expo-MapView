import React, { Component } from 'react'
import { View, Text ,StyleSheet} from "react-native"

export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{ textAlign: "center",fontSize:30 ,marginTop:19}}>Home</Text>

            </View>
        )
    }
}
const styles= StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
       
      },
})

