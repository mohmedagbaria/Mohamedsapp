import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ScreenNames from './ScreenNames';
import home from '../screens/home';
import splash from '../screens/splash';

const MainNavigation = () => {
  const Stack = createNativeStackNavigator();

  /**
   * each screen get 2 props from the navigator :
   * 1- navigation : contains all the navigation functions such as naigate , goBack , canGoBack
   * 2- route : contains all the route (screen) props
   */

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={ScreenNames.splash} component={splash} />
        <Stack.Screen name={ScreenNames.home} component={home} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;

