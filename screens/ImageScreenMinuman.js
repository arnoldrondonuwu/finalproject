import React from 'react';
import { Text, View, Image } from 'react-native';
import ImageDetailMinuman from '../components/ImageDetailMinuman';

const ImageScreenMinuman = () => {
    return (
        <View>
              <ImageDetailMinuman 
                title="NutriSari Biasa/Dingin Rp 5.000"
                imageSource={require('../assets/nutrisari.jpg')}
            />
            <ImageDetailMinuman 
                title="TehManis Biasa/Dingin Rp 5.000"
                imageSource={require('../assets/estehmanis.jpg')}
            />
            <ImageDetailMinuman
                title="Coca-Cola Biasa/Dingin Rp 6.000"
                imageSource={require('../assets/cocacola.jpg')}
            />
             <ImageDetailMinuman
                title="Fanta Biasa/Dingin Rp 6.000"
                imageSource={require('../assets/fanta.jpg')}
            />
             <ImageDetailMinuman
                title="Aqua Biasa/Dingin Rp 4.000"
                imageSource={require('../assets/aqua.jpg')}
            />
        </View>
    )
};

export default ImageScreenMinuman;