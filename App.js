import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  Button,
  Alert
} from 'react-native';
import HomeScreen from "./components/Home"
import MapScreen from "./components/MapViewCom"
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';

const Tab = createBottomTabNavigator();
class App extends React.Component {
  state = {
    isReady: false
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
      <NavigationContainer>
        <StatusBar barStyle={"light-content"} />
        <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-home'
                : 'ios-home';
            } else if (route.name === 'Navi') {
              iconName = focused ? 'ios-map' : 'ios-map';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })} tabBarOptions={{
          activeTintColor: '#8C86E8',
          inactiveTintColor: 'gray',
        }}>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Navi" component={MapScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

export default App
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    margin: 10,
    borderRadius: 15
  }
});
