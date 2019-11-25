import React from 'react';
import { Text, View,Image, ImageBackground, StyleSheet,TouchableOpacity } from 'react-native';
import ImageDetailEs from '../components/ImageDetailEs';
import { ScrollView } from 'react-native-gesture-handler';

const ImageScreenEs = ({navigation}) => {
   return (
      <View>
             <ImageBackground source={require('../assets/siang.jpg')} style={{width: '100%', height: '100%'}}>
         <ScrollView>
         <View style = {styles.container}>
                 <View style={styles.tengah}>
                 <Text style={styles.text}>Es Campur Rp 20.000</Text>
                 <TouchableOpacity onPress ={() => navigation.navigate('ImageDEscampur')}>
                 <ImageDetailEs
                 imageSource={require('../assets/escampur.jpeg')}
                 />
                 </TouchableOpacity>
               </View>
 
               <View style={styles.tengah}>
               <Text style={styles.text}>Es Kacang Rp 20.000</Text>
               <TouchableOpacity onPress ={()=> navigation.navigate('ImageDEskacang')}>
                 <ImageDetailEs
                     imageSource={require('../assets/eskacangmerah.jpg')}
                 />
                 </TouchableOpacity>
               </View>
 
               <View style={styles.tengah}>
               <Text style={styles.text}>Es KelapaDurian Rp 20.000</Text>
               <TouchableOpacity onPress={()=> navigation.navigate('ImageDEskelapadurian')}>
                 <ImageDetailEs 
                 imageSource={require('../assets/esdurian.jpg')}
                 />
                 </TouchableOpacity>
               </View>
 
             <View style={styles.tengah}>
                 <Text style={styles.text}>Es KelapaJeruk Rp 20.000</Text>
                 <TouchableOpacity onPress ={()=> navigation.navigate('ImageDEskelapajeruk')}>
                 <ImageDetailEs 
                 imageSource={require('../assets/eskelapajeruk.jpg')}
                 />
                 </TouchableOpacity>
               </View>
 
             <View style={styles.tengah}>
                 <Text style={styles.text}>Es Avokad Rp 20.000</Text>
                 <TouchableOpacity onPress ={()=> navigation.navigate('ImageDEsavokad')}>
                 <ImageDetailEs
                 imageSource={require('../assets/esavokad.jpg')}
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
     width: "62%",
     marginVertical:20
 }, 
 text:{
     color:'white',
     textAlign: 'center',
     fontSize : 25,
     
 
 }
 })

export default ImageScreenEs;