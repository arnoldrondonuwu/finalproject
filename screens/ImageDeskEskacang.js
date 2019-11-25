import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


const ImageDeskEskacang = () => {
    return(
                <ScrollView>
                  <Text style={styles.text}> Es kacang merah adalah sebuah minuman yang umum ditemukan di Hong Kong. 
                  Minuman tersebut biasanya disajikan di tempat-tempat makan seperti cha chaan teng. 
                  Minuman tersebut adalah hidangan penutup populer pada musim panas. Bahan-bahan standarnya meliputi kacang 
                  adzuki/kacang merah, sirup gula batu ringan dan susu evaporasi. 
                  Minuman tersebut seringkali ditambah dengan es krim untuk dijadikan hidangan penutup 
                  bernama es krim beku kacang merah.</Text>
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


export default ImageDeskEskacang;