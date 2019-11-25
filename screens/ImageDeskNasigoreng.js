import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


const ImageDeskNasigoreng = () => {
    return(
                <ScrollView>
                  <Text style={styles.text}> Nasi goreng merupakan sajian nasi yang digoreng dalam sebuah wajan atau 
                  penggorengan menghasilkan cita rasa berbeda karena dicampur dengan bumbu-bumbu seperti bawang putih, 
                  bawang merah, merica dan kecap manis. Selain itu, ditambahkan bahan-bahan pelengkap seperti telur, 
                  sayur-sayuran, makanan laut, atau daging. Makanan tersebut seringkali disantap sendiri atau disertai 
                  dengan hidangan lainnya. Nasi goreng adalah komponen populer dari masakan Asia Timur, Tenggara dan 
                  Selatan pada wilayah tertentu. Sebagai hidangan buatan rumah, nasi goreng biasanya dibuat dengan
                  bahan-bahan yang tersisa dari hidangan lainnya, yang berujung pada ragam yang tak terbatas.</Text>
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


export default ImageDeskNasigoreng;