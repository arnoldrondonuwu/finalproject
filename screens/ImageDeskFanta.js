import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


const ImageDeskFanta = () => {
    return(
                <ScrollView>
                  <Text style={styles.text}> Fanta adalah merek minuman ringan berkarbonasi rasa buah yang diproduksi 
                  oleh The Coca-Cola Company. Tersedia lebih dari ratusan pilihan rasa di seluruh dunia. 
                  Minuman ini diperkenalkan pertama kali di Jerman pada tahun 1940.
                  Fanta berasal sebagai akibat dari kesulitan mengimpor Coca-Cola sirup ke Nazi Jerman selama Perang Dunia 
                  II karena embargo perdagangan. Untuk menghindari hal ini, Max Keith, kepala Coca-Cola Deutschland 
                  (Coca-Cola GmbH) selama Perang Dunia Kedua, memutuskan untuk membuat produk baru untuk pasar Jerman, 
                  menggunakan hanya bahan-bahan yang tersedia di Jerman pada waktu itu, termasuk whey dan pomace - 
                  "sisa sisa", seperti Keith kemudian mengenang. Nama itu hasil dari sesi brainstorming singkat, 
                  yang dimulai dengan Keith mendesak timnya untuk "menggunakan imajinasi mereka" 
                  ("Fantasie" dalam bahasa Jerman), yang salah satu salesman, Joe Knipp, segera menukas "Fanta!" 
                  Sementara tanaman secara efektif terputus dari markas Coca Cola selama perang, manajemen pabrik 
                  tidak bergabung dengan Partai Nazi. Setelah perang, Coca Cola perusahaan kembali menguasai tanaman, 
                  rumus dan merek dagang untuk produk Fanta baru - serta keuntungan tanaman dibuat selama perang.</Text>
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


export default ImageDeskFanta;