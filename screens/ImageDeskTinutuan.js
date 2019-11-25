import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


const ImageDeskTinutuan = () => {
    return(
                <ScrollView>
                  <Text style={styles.text}> Tinutuan atau Bubur Manado adalah makanan khas Indonesia dari Manado,
                   Sulawesi Utara.Ada juga yang mengatakan tinutuan adalah makanan khas Minahasa, Sulawesi Utara.
                   Tinutuan merupakan campuran berbagai macam sayuran, tidak mengandung daging, sehingga makanan ini bisa
                   menjadi makanan pergaulan antarkelompok masyarakat di Manado. Tinutuan biasanya disajikan untuk sarapan
                   pagi beserta berbagai pelengkap hidangannya. Walaupun demikian, tinutuan umumnya tetap dapat ditemukan 
                   di berbagai rumah makan di luar waktu sarapan.</Text>
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


export default ImageDeskTinutuan;