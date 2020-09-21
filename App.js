import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
//네비게이션을 위한 import
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import 'react-native-gesture-handler';
//컴포넌트 스크린 가져오기
import HomeScreen from './HomeScreen';
import TodoScreen from './TodoScreen';

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
  },
  Todo: {
    screen: TodoScreen,
  },
});

export default createAppContainer(TabNavigator);