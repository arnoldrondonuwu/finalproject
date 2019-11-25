import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


const ImageDeskEscampur = () => {
    return(
                <ScrollView>
                  <Text style={styles.text}> Es campur adalah salah satu minuman khas Indonesia yang cara membuat nya 
                  dengan mencampurkan berbagai jenis bahan dalam sirup manis. Bahan yang dijadikan bahan biasanya berasa 
                  manis atau masam. Es campur dapat dijumpai di berbagai daerah di Indonesia dengan rasa dan bahan yang 
                  berbeda. Oleh karena itu daerah asal dari es campur sulit ditentukan.</Text>
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


export default ImageDeskEscampur;