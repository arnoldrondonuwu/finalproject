import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


const ImageDeskTehmanis = () => {
    return(
                <ScrollView>
                  <Text style={styles.text}> Teh manis adalah minuman yang terbuat dari larutan teh yang diberi pemanis,
                   biasanya gula tebu, sebelum minuman ini siap disajikan. Untuk konteks Indonesia, teh manis yang diberi
                   es biasa disebut es teh. Es teh sangat jarang disajikan tanpa pemanis, pembeli biasanya secara spesifik 
                   akan meminta es teh tawar jika menginginkan es teh tanpa gula. Penambahan pemanis ke dalam air panas 
                   memungkinkan proses lepas-jenuh larutan, maksudnya larutan teh mampu melarutkan pemanis dalam kadar 
                   yang lebih besar dibandingkan ketika pada suhu dingin. Banyak rumah makan yang memberikan pilihan kepada 
                   pengunjung apakah teh yang disajikan akan disajikan panas atau dingin. Variasi rasa manis pada minuman 
                   yang khas ini sangat merakyat di Indonesia dan Amerika Serikat Selatan. Di Indonesia, selain disajikan 
                   menurut cara tradisional, teh manis juga banyak dikemas di dalam botol atau kotak. Beberapa merek 
                   teh manis dalam kemasan mulai menjamur sejak pertengahan tahun 2000-an, teh manis tersebut diberi 
                   perisa tambahan, semisal rasa buah, atau aroma cengkih, melati, mawar, jeruk nipis, atau hanya 
                   diberi pemanis asli. Dua merek teh manis dalam kemasan di Indonesia yang cukup tua adalah teh 
                   botol dan teh kotak.</Text>
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


export default ImageDeskTehmanis;