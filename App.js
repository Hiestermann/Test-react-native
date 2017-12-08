import React from 'react';
import {View, Text, ImagePickerIOS} from 'react-native';
import firebase from 'react-native-firebase';
import MainScreen from './MainScreen';
import {StackNavigator} from 'react-navigation';
import LoginScreen from './LoginScreen';
import SignUpScreen from './SignUpScreen';
import MainTabNavigation from './MainTabNavigator';
import ImagePickerScreen from './ImagePickerScreen';
import InterestsScreen from './InterestsScreen';
import AboutyouScreen from './AboutyouScreen';
import TestView from './TestView';




const App = StackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: null,
      gesturesEnabled: false,
     },
  },
  Main: {
    screen: MainTabNavigation,
    navigationOptions: {
      header: null,
      gesturesEnabled: false,
     },
  },
  SignUp: {
    screen: SignUpScreen,
    navigationOptions: {
      header: null,
      gesturesEnabled: false,
     },
  },
  ProfileImagePicker: {
    screen: ImagePickerScreen
  },
  Interests: {
    screen: InterestsScreen
  },
  Aboutyou: {
    screen: AboutyouScreen
  },
  TestView: {
    screen: TestView
  }

}, {
  initialRouteName: 'Main',
 
});

export default App;