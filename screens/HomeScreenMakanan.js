import React from 'react';
import { Text, View, Button } from 'react-native';

const HomeScreenMakanan = ({ navigation }) => {
    return (
       <View>
            
         
           <Text></Text>
           <Button 
                title="Silahkan Pilih Makanan"
                onPress={() => navigation.navigate('ImageMakanan')}
           />
           <Button 
                title="Silahkan Pilih Minuman"
                onPress={() => navigation.navigate('ImageMinuman')}
           />
            <Button 
                title="Silahkan Pilih Es"
                onPress={() => navigation.navigate('ImageEs')}
           />
       </View>
    );
};

export default HomeScreenMakanan;