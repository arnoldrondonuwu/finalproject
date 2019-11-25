import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


const ImageDeskNutrisari = () => {
    return(
                <ScrollView>
                  <Text style={styles.text}>NutriSari merupakan salah satu minuman sari buah di Indonesia yang dimiliki 
                  oleh PT Nutrifood dan diluncurkan pada tahun 1979. Produk-produk NutriSari memiliki kandungan nutrisi
                  vitamin C, serta 6 vitamin dan 2 mineral lainnya. NutriSari dapat dinikmati dingin maupun hangat.
                  NutriSari memiliki beragam iklan TV yang lucu dan menarik dari zaman dulu hingga sekarang. 
                  Ikonnya yang terkenal adalah “Si Jeruk”.</Text>
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


export default ImageDeskNutrisari;