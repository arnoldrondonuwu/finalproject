import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


const ImageDeskEsavokad = () => {
    return(
                <ScrollView>
                  <Text style={styles.text}> Es alpukat/avokad adalah es yang tentunya berisi alpukat. 
                  Buah yang dipakai sebaiknya alpukat mentega, karena alpukat mentega tidak berurat dan 
                  lebih halus buahnya. Jika anda tidak pandai dalam memilih alpukat, biasanya alpukat yang didapat 
                  adalah alpukat yang berurat, sehingga tidak bisa digunakan dan akan lebih banyak terbuang. 
                  Untuk dapat membuat resep es alpukat ini, tentu saja kita harus menunggu hingga buah itu matang 
                  dan tidak keras. Alpukat memiliki kandungan lemak yang baik untuk tubuh. Jadi anda tidak perlu 
                  khawatir bila ingin makan buah alpukat. Alpukat dapat dibuat jadi es, jus atau langsung dimakan 
                  tergantung selera anda. Tapi di sini saya ingin memberikan resep bagaimana cara membuat es alpukat 
                  yang enak dan sehat bagi tubuh kita.</Text>
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


export default ImageDeskEsavokad;