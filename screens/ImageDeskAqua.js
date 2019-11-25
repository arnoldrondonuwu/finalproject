import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


const ImageDeskAqua = () => {
    return(
                <ScrollView>
                  <Text style={styles.text}> Aqua adalah sebuah merek air minum dalam kemasan (AMDK) yang diproduksi 
                  oleh PT Aqua Golden Mississippi di Indonesia sejak tahun 1973. Selain di Indonesia, Aqua juga dijual 
                  di Malaysia, Singapura, dan Brunei. Aqua adalah merek AMDK dengan penjualan terbesar di Indonesia dan 
                  merupakan salah satu merek AMDK yang paling terkenal di Indonesia, sehingga telah menjadi seperti 
                  merek generik untuk AMDK. Saat ini, terdapat 14 pabrik yang memproduksi Aqua dengan kepemilikan 
                  berbeda-beda (3 pabrik dimiliki oleh PT Tirta Investama, 10 pabrik dimiliki oleh PT Aqua Golden 
                  Mississippi, dan pabrik di Berastagi, Sumatra Utara dimiliki oleh PT Tirta Sibayakindo). 
                  Sejak tahun 1998, Aqua sudah dimiliki oleh perusahaan multinasional dalam bidang makanan dan minuman 
                  asal Prancis, Grup Danone, hasil dari penggabungan PT Aqua Golden Mississippi dengan Danone. 
                  Aqua didirikan oleh Tirto Utomo (1930-1994), warga asli Wonosobo yang setelah keluar bekerja dari 
                  Pertamina, dan bekerja di Petronas, mendirikan usaha air minum dalam kemasan (AMDK).Tirto berjasa besar 
                  atas perkembangan bisnis atau usaha AMDK di Indonesia, karena sebagai seorang pionir maka Almarhum 
                  berhasil menanamkan nilai-nilai dan cara pandang bisnis AMDK di Indonesia.</Text>
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


export default ImageDeskAqua;