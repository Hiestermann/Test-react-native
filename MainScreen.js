import React from 'react';
import {View, Text, Button} from 'react-native';
import firebase from 'react-native-firebase';
import MainTabNavigation from './MainTabNavigator';
import LoginScreen from './LoginScreen';

class MainScreen extends React.Component {
    render() {
        return(
            <MainTabNavigation/>
        )
    }
}


export default MainScreen;