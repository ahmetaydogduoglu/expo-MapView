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

const Tab = createBottomTabNavigator();
class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <StatusBar backgroundColor="blue" />
        <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = "ios-home"
            } else if (route.name === 'Navi') {
              iconName = "ios-map"
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={30} color={color} />;
          },
        })}>
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
