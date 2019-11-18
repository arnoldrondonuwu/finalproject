import React from 'react';
import { View, Text, Image } from 'react-native';

const ImageDetailMakanan = ({imageSource, title, rating}) => {
    return(
        <View>
            <Image 
                style={{width: 100, height: 90}}
                source={imageSource}
            />
            <Text>{title}</Text>
        </View>
    )
};

export default ImageDetailMakanan;