import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

//네비게이션을 위한 import
import {createAppContainer} from 'react-navigation';
//import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import 'react-native-gesture-handler';

//icon 불러오기
import Ionicons from 'react-native-vector-icons/Ionicons';

//라우트 스크린 가져오기
import HomeScreen from './HomeScreen';
import TodoScreen from './TodoScreen';

const TabNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({tintColor}) => (
          <View>
            <Ionicons style={[{color: tintColor}]} size={25} name={'ios-home'} />
          </View>
        ),
        activeColor: '#000080',
        inactiveColor: '#226557',
        barStyle: {backgroundColor: '#B0C4DE'},
      },
    },
    Todo: {
      screen: TodoScreen,
      navigationOptions: {
        tabBarLabel: 'Todo',
        tabBarIcon: ({tintColor}) => (
          <View>
            <Ionicons
              style={[{color: tintColor}]}
              size={25}
              name={'flag-sharp'}
            />
          </View>
        ),
        activeColor: '#006400',
        inactiveColor: '#226557',
        barStyle: {backgroundColor: '#8FBC8F'},
      },
    },
  },
  {
    initialRouteName: 'Home',
    shifting: true,
  },
);

export default createAppContainer(TabNavigator);