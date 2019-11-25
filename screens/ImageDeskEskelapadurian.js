import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


const ImageDeskEskelapadurian = () => {
    return(
                <ScrollView>
                  <Text style={styles.text}> Es kelapa muda durian adalah minuman segar penyejuk dahaga yang terbuat 
                  dari daging dan air kelapa yang masih muda dan daging buah durian. Es kelapa muda durian merupakan 
                  minuman yang berasal dari Indonesia yang banyak digemari oleh orang-orang. Es kelapa muda durian 
                  pernah masuk kedalam 50 minuman terenak di dunia versi CNN pada tanggal 9 Desember 2011 
                  yang menduduki peringkat ke-19.</Text>
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


export default ImageDeskEskelapadurian;