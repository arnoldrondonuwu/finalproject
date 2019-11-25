import React from 'react';
import { Text, View, Image, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import ImageDetailMinuman from '../components/ImageDetailMinuman';
import { ScrollView } from 'react-native-gesture-handler';

const ImageScreenMinuman = ({navigation}) => {
    return (
        <View>
               <ImageBackground source={require('../assets/siang.jpg')} style={{width: '100%', height: '100%'}}>
           <ScrollView>
           <View style = {styles.container}>
                   <View style={styles.tengah}>
                   <Text style={styles.text}>NutriSari Biasa/Dingin Rp 5.000</Text>
                   <TouchableOpacity onPress={()=> navigation.navigate('ImageDNutrisari')}>
                   <ImageDetailMinuman
                   imageSource={require('../assets/nutrisari.jpg')}
                   />
                   </TouchableOpacity>
                 </View>

                 <View style={styles.tengah}>
                 <Text style={styles.text}>TehManis Biasa/Dingin Rp 5.000</Text>
                 <TouchableOpacity onPress ={()=> navigation.navigate('ImageDTehmanis')}>
                   <ImageDetailMinuman
                       imageSource={require('../assets/estehmanis.jpg')}
                   />
                   </TouchableOpacity>
                 </View>
   
                 <View style={styles.tengah}>
                 <Text style={styles.text}>Coca-Cola Biasa/Dingin Rp 6.000</Text>
                 <TouchableOpacity onPress ={()=> navigation.navigate('ImageDCocacola')}>
                   <ImageDetailMinuman 
                   imageSource={require('../assets/cocacola.jpg')}
                   />
                   </TouchableOpacity>
                 </View>
   
               <View style={styles.tengah}>
                   <Text style={styles.text}>Fanta Biasa/Dingin Rp 6.000</Text>
                   <TouchableOpacity onPress ={()=> navigation.navigate('ImageDFanta')}>
                   <ImageDetailMinuman 
                   imageSource={require('../assets/fanta.jpg')}
                   />
                   </TouchableOpacity>
                 </View>
   
               <View style={styles.tengah}>
                   <Text style={styles.text}>Aqua Biasa/Dingin Rp 4.000</Text>
                   <TouchableOpacity onPress ={()=> navigation.navigate('ImageDAqua')}>
                   <ImageDetailMinuman 
                   imageSource={require('../assets/aqua.jpg')}
                   />
                   </TouchableOpacity>
                 </View>
           </View>
           </ScrollView>
           </ImageBackground>
       </View>
       )
   };
   
   const styles = StyleSheet.create({
       container: {
           flex: 1,
           justifyContent: 'center',
           alignItems: 'center'
       },
   tengah:{
       width: "55%",
       marginVertical:20
   }, 
   text:{
       color:'white',
       textAlign: 'center',
       fontSize : 25,
       
   
   }
   })

export default ImageScreenMinuman;