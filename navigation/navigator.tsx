/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer';
import * as routes from './routes';
import LoginScreen from '../Screens/LoginScreen';
import {HOME_SCREEN} from './routes';
import HomeScreen from '../Screens/HomeScreen';
import {Dimensions} from 'react-native';
import loginBar from '../components/loginBar';
import LoginBar from '../components/loginBar';

const Navigator = () => {
  const Stack = createStackNavigator();
  const Drawer = createDrawerNavigator();

  const MyAuthLoadingStack = () => (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}></Stack.Navigator>
  );
  const RootStackScreen = () => (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {/* <Stack.Screen
        name={routes.NAVIGATION_AUTH_LOADING_STACK}
        component={MyAuthLoadingStack}
      /> */}
      <Stack.Screen
        name={routes.NAVIGATION_TAB_STACK}
        component={DrawerStack}
      />
    </Stack.Navigator>
  );

  const DrawerStack = () => (
    <Drawer.Navigator
      screenOptions={{
        drawerPosition: 'right',
        headerShown: false,
        drawerStyle: {width: 320, height: Dimensions.get('window').height / 1},
      }} drawerContent={props => <LoginBar {...props} />}>
      <Drawer.Screen name={routes.HOME_SCREEN} component={HomeScreen} />
    </Drawer.Navigator>
  );

  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  );
};

export default Navigator;
