import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


const ImageDeskNasikuning = () => {
    return(
                <ScrollView>
                  <Text style={styles.text}> Nasi kuning adalah sebuah hidangan nasi berwarna kuning tradisional dalam 
                   masakan-masakan Spanyol, Kuba, Peru, Karibia, Filipina, Afganistan, Sri Lanka, Afrika Selatan
                   dan Indonesia. Makanan tersebut berbahan dasar nasi putih, yang dicampur dengan annatto, saffron
                   atau kunyit yang dipakai untuk memberikan warna kuning. Nasi kuning Afrika Selatan, yang berasal 
                   dari masakan Melayu Cape, biasanya terdiri dari kismis, gula dan kulit kayu manis, membuat sebuah 
                   hidangan nasi yang sangat manis yang disajikan sebagai makanan pokok untuk hidangan asam dan kari.
                   Di Sri Lanka, makanan tersebut disebut kaha buth dan memiliki pengaruh Indonesia dan Sri Lanka.
                   Di Indonesia, hidangan tersebut disebut sebagai nasi kuning.Di Filipina, hidangan tersebut disebut
                   sebagai kuning.</Text>
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


export default ImageDeskNasikuning;