import React from 'react';
import { View, Text, Image } from 'react-native';

const ImageDetailMinuman = ({imageSource, title, rating}) => {
    return(
        <View>
            <Image 
                style={{width: 100, height: 93}}
                source={imageSource}
            />
            <Text>{title}</Text>
        </View>
    )
};

export default ImageDetailMinuman;