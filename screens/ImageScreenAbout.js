import React from 'react';
import { Text, View, Image, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import ImageDetailMakanan from '../components/ImageDetailMakanan';
import { ScrollView } from 'react-native-gesture-handler';

const ImageScreenAbout = () => {
    return(
        <ScrollView>
          <Text style={styles.text}> </Text>
        </ScrollView>
)
};

const styles = StyleSheet.create({

text:{
backgroundColor: 'black',
color:'white',
textAlign: 'center',
fontSize : 30,
}
})  

export default ImageScreenAbout;