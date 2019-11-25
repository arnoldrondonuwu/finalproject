import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


const ImageDeskCocacola = () => {
    return(
                <ScrollView>
                  <Text style={styles.text}> Coca-Cola adalah minuman ringan berkarbonasi yang dijual di toko,
                   restoran, dan mesin penjual di lebih dari 200 negara. Minuman ini diproduksi oleh The Coca-Cola Company
                   asal Atlanta, Georgia, dan sering disebut Coke saja (merek dagang terdaftar The Coca-Cola Company di 
                   Amerika Serikat sejak 27 Maret 1944). Awalnya dibuat sebagai obat paten saat ditemukan pada akhir abad 
                   ke-19 oleh John Pemberton, Coca-Cola akhirnya dibeli oleh pebisnis Asa Griggs Candler yang taktik 
                   pemasarannya berhasil membuat Coke mendominasi pasar minuman ringan dunia sepanjang abad ke-20. 
                   Perusahaan ini memproduksi konsentrat yang kemudian dijual ke pabrik Coca-Cola berlisensi di seluruh 
                   dunia. Pabrik botol yang memegang kontrak ekskulsif dengan perusahaan ini memproduksi produk akhir 
                   dalam bentuk kaleng dan botol dari konsentrat tersebut, dicampur dengan air yang telah disaring dan 
                   pemanis. Pabrik-pabrik tersebut kemudian menjual, mendistribusikan, dan memasarkan Coca-Cola ke 
                   toko-toko eceran dan mesin penjaja. Coca-Cola Enterprises adalah contoh pabrik Coca-Cola, 
                   yang merupakan pabrik Coca-Cola terbesar di Amerika Utara dan Eropa Barat. The Coca-Cola Company 
                   juga menjual konsentrat untuk air mancur soda di sejumlah restoran besar dan distributor jasa makanan.</Text>
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


export default ImageDeskCocacola;