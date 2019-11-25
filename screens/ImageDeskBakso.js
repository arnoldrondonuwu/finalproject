import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


const ImageDeskBakso = () => {
    return(
                <ScrollView>
                  <Text style={styles.text}> Bakso atau baso adalah jenis bola daging yang lazim ditemukan
                   pada masakan Indonesia.Bakso umumnya dibuat dari campuran daging sapi giling dan tepung tapioka, 
                   akan tetapi ada juga bakso yang terbuat dari daging ayam, ikan, atau udang bahkan daging kerbau. 
                   Dalam penyajiannya, bakso umumnya disajikan panas-panas dengan kuah kaldu sapi bening, dicampur mi,
                   bihun, taoge, tahu, terkadang telur dan ditaburi bawang goreng dan seledri. Bakso sangat populer 
                   dan dapat ditemukan di seluruh Indonesia; dari gerobak pedagang kaki lima hingga restoran besar. 
                   Berbagai jenis bakso sekarang banyak ditawarkan dalam bentuk makanan beku yang dijual di pasar 
                   swalayan ataupun mal-mal. Irisan bakso dapat juga dijadikan pelengkap jenis makanan lain seperti 
                   mi goreng, nasi goreng, atau cap cai.</Text>
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


export default ImageDeskBakso;