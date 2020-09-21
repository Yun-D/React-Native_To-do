import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
//네비게이션을 위한 import
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import 'react-native-gesture-handler';

//icon 불러오기
import Ionicons from 'react-native-vector-icons/Ionicons';

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
}, 
{
  defaultNavigationOptions: ({navigation}) => ({
    tabBarIcon: ({horizontal, tintColor}) => {
      const {routeName} = navigation.state;
      let iconName;

      if(routeName === 'Home') {
        iconName = 'home';
      } else if (routeName === 'Todo') {
        iconName = 'flag-sharp';
      }

      return (
        <Ionicons 
          name = {iconName}
          size = {horizontal ? 20 : 25}
          color = {tintColor}
        />
      );
    },
  }),
  },
);

export default createAppContainer(TabNavigator);