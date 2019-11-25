import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


const ImageDeskLalapan = () => {
    return(
                <ScrollView>
                  <Text style={styles.text}> Ayam goreng/Lalapan adalah hidangan yang dibuat dari daging ayam dicampur 
                tepung bumbu yang digoreng dalam minyak goreng panas. Beberapa rumah 
                makan siap saji secara khusus menghidangkan ayam goreng, misalnya Kentucky Fried Chicken.
                Sementara itu beberapa rumah makan di Indonesia juga menghidangkan ayam goreng tradisional 
                Indonesia seperti Ayam Goreng Lalapan.</Text>
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


export default ImageDeskLalapan;