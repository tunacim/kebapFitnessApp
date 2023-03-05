import React from "react";
import { SafeAreaView,View,Text, StyleSheet } from "react-native";
function MemberResult({route}){
    const{user}=route.params
return(
    <SafeAreaView>
        <Text style={styles.title}>Kayıt Tamamlandı.</Text>
        <Text style={styles.label}>Üyenin Adı: {user.userName}</Text>
        <Text style={styles.label}>Üyenin Soyadı: {user.userSurname}</Text>
        <Text style={styles.label}>Üyenin Yaşı: {user.userAge}</Text>
        <Text style={styles.label}>Üyenin E-postası:{user.userMail}</Text>
        <Text style={styles.label}>Üyenin yaşadığı şehir: {user.userCity}</Text>

    </SafeAreaView>
)

}
const styles=StyleSheet.create({
label:{fontWeight:"bold",fontSize:20,margin:10},
title:{fontWeight:"bold",textAlign:"center",fontSize:40 ,color:"purple"}
})
export default MemberResult