import React from 'react';
import { Text, View, Image } from 'react-native';
import ImageDetailEs from '../components/ImageDetailEs';

const ImageScreenEs = () => {
    return (
        <View>
              <ImageDetailEs 
                title="Es Campur Rp 20.000"
                imageSource={require('../assets/escampur.jpeg')}
            />
            <ImageDetailEs 
                title="Es Kacang Rp 20.000"
                imageSource={require('../assets/eskacangmerah.jpg')}
            />
            <ImageDetailEs
                title="Es KelapaDurian Rp 20.000"
                imageSource={require('../assets/esdurian.jpg')}
            />
             <ImageDetailEs
                title="Es KelapaJeruk Rp 20.000"
                imageSource={require('../assets/eskelapajeruk.jpg')}
            />
             <ImageDetailEs
                title="Es Avokad Rp 20.000"
                imageSource={require('../assets/esavokad.jpg')}
            />
        </View>
    )
};

export default ImageScreenEs;