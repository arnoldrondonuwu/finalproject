import React from 'react';
import { createStackNavigator, createAppContainer} from 'react-navigation';

import { StyleSheet, Text, View } from 'react-native';
import HomeScreenMakananMinumanEs from './screens/HomeScreenMakananMinumanEs';
import ImageScreenMakanan from './screens/ImageScreenMakanan';
import ImageScreenMinuman from './screens/ImageScreenMinuman';
import ImageScreenEs from './screens/ImageScreenEs';
import ImageScreenAbout from './screens/ImageScreenAbout';
import ImageDeskLalapan from './screens/ImageDeskLalapan';
import ImageDeskBakso from './screens/ImageDeskBakso';
import ImageDeskNasigoreng from './screens/ImageDeskNasigoreng';
import ImageDeskNasikuning from './screens/ImageDeskNasikuning';
import ImageDeskTinutuan from './screens/ImageDeskTinutuan';
import ImageDeskNutrisari from './screens/ImageDeskNutrisari';
import ImageDeskTehmanis from './screens/ImageDeskTehmanis';
import ImageDeskCocacola from './screens/ImageDeskCocacola';
import ImageDeskFanta from './screens/ImageDeskFanta';
import ImageDeskAqua from './screens/ImageDeskAqua';
import ImageDeskEscampur from './screens/ImageDeskEscampur';
import ImageDeskEskacang from './screens/ImageDeskEskacang';
import ImageDeskEskelapadurian from './screens/ImageDeskEskelapadurian';
import ImageDeskEskelapajeruk from './screens/ImageDeskEskelapajeruk';
import ImageDeskEsavokad from './screens/ImageDeskEsavokad';


const navigator = createStackNavigator({
  Home: HomeScreenMakananMinumanEs,
  ImageMakanan: ImageScreenMakanan,
  ImageMinuman: ImageScreenMinuman,
  ImageEs: ImageScreenEs,
  ImageAbout: ImageScreenAbout,
  ImageDLalapan: ImageDeskLalapan,
  ImageDBakso: ImageDeskBakso,
  ImageDNasigoreng: ImageDeskNasigoreng,
  ImageDNasikuning: ImageDeskNasikuning,
  ImageDTinutuan: ImageDeskTinutuan,
  ImageDNutrisari: ImageDeskNutrisari,
  ImageDTehmanis: ImageDeskTehmanis,
  ImageDCocacola: ImageDeskCocacola,
  ImageDFanta: ImageDeskFanta,
  ImageDAqua: ImageDeskAqua,
  ImageDEscampur: ImageDeskEscampur,
  ImageDEskacang: ImageDeskEskacang,
  ImageDEskelapadurian: ImageDeskEskelapadurian,
  ImageDEskelapajeruk: ImageDeskEskelapajeruk,
  ImageDEsavokad: ImageDeskEsavokad
},{  
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    headerTitle: 'Menu Rumah Makan Unklab',
    alignItems: 'center',
    justifyContent: 'center',

    headerStyle: {
    backgroundColor : 'White'
    }
  }
});

export default createAppContainer(navigator);
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


