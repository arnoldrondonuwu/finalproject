import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class ImageScreenAbout extends Component {

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerContent}>
                <Image style={styles.avatar}
                  source={require('../assets/Arnold.jpg')}/>

                <Text style={styles.name}>Arnold Rondonuwu </Text>
                <Text style={styles.userInfo}>Rondonuwu_arnold@yahoo.com </Text>
                <Text style={styles.userInfo}>Manado </Text>
            </View>
             
          </View>
          <ScrollView>
                <View>

                    <Text style={styles.text}> Rumah Makan (RM) Padang atau Warung Padang atau Restoran Padang adalah suatu bisnis warung makan/rumah makan/restoran yang menjual atau menghidangkan berbagai ragam kuliner atau masakan Minangkabau yang berasal dari Sumatra Barat. 
                      Rumah makan ini amat terkenal di Indonesia bahkan dunia,dan disukai oleh berbagai kalangan serta bermacam etnis dan bangsa karena masakan/makanannya yang lezat serta daya adaptasinya yang bisa menyesuaikan diri dengan lidah atau selera masyarakat di mana rumah makan ini berada.
                      RM Padang di luar Sumatra Barat menghidangkan masakan yang tidak terlalu pedas, berbeda dengan rumah makan yang ada di tanah kelahirannya sendiri.
                   </Text>

                </View>
            </ScrollView>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  header:{
    backgroundColor: "#DCDCDC",
  },
  headerContent:{
    padding:30,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
  },
  name:{
    fontSize:22,
    color:"#000000",
    fontWeight:'600',
  },
  userInfo:{
    fontSize:16,
    color:"#778899",
    fontWeight:'600',
  },
  body:{
    backgroundColor: "#778899",
    height:500,
    alignItems:'center',
  },
  text:{
    backgroundColor: 'black',
    color:'white',
    textAlign: 'center',
    fontSize : 16,
}
});