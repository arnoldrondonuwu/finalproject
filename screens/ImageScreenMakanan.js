import React from 'react';
import { Text, View, Image } from 'react-native';
import ImageDetailMakanan from '../components/ImageDetailMakanan';

const ImageScreenMakanan = () => {
    return (
        <View>
            <ImageDetailMakanan 
                title="Ayam Lalapan Rp 20.000"
                imageSource={require('../assets/ayamlalapan.jpg')}
            />
            <ImageDetailMakanan 
                title="Bakso Rp 20.000"
                imageSource={require('../assets/bakso.jpg')}
            />
            <ImageDetailMakanan
                title="Nasi Goreng Rp 15.000"
                imageSource={require('../assets/nasigoreng.jpg')}
            />
             <ImageDetailMakanan
                title="Nasi Kuning Rp 13.000"
                imageSource={require('../assets/nasikuning.jpg')}
            />
             <ImageDetailMakanan
                title="Tinutuan Rp 10.000"
                imageSource={require('../assets/tinutuan.jpg')}
            />
        </View>
    )
};

export default ImageScreenMakanan;