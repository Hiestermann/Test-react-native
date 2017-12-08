import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';

import Profile from './components/TabNavigator/Profile/Profile';
import ContentAdder from './components/TabNavigator/ContentAdder/ContentAdder';
import Channel from './components/TabNavigator/Channel/Channel';
import Card from './components/TabNavigator/CardMatcher/CardMatcher';
import ChatStackNav from './components/TabNavigator/Chat/ChatStackNav';


const MainTabNavigation = TabNavigator ({
  Profile: { screen: Profile },
  Content: { screen: ContentAdder},
  Chat: {screen: ChatStackNav},
  Channel: {screen: Channel},
  CardMatcher: {screen: Card}

}, {
    tabBarPosition: 'bottom',
    tabBarOptions: {
    activeTintColor: '#e91e63',
    activeBackgroundColor: 'green',
      
  },
  animationEnabled: false,});

  export default MainTabNavigation;
