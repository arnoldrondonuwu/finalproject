import React from 'react';
import { createStackNavigator, createAppContainer} from 'react-navigation';

import { StyleSheet, Text, View } from 'react-native';
import HomeScreenMakanan from './screens/HomeScreenMakanan';
import ImageScreenMakanan from './screens/ImageScreenMakanan';
import ImageScreenMinuman from './screens/ImageScreenMinuman';
import ImageScreenEs from './screens/ImageScreenEs';

const navigator = createStackNavigator({
  Home: HomeScreenMakanan,
  ImageMakanan: ImageScreenMakanan,
  ImageMinuman: ImageScreenMinuman,
  ImageEs: ImageScreenEs
  
},{
  
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    headerTitle: '  Rumah Makan Unklab',
    headerStyle: {
     backgroundColor: 'grey'
    }
  }
});

export default createAppContainer(navigator);
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF5733',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


