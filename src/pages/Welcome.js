import React from "react";
import { SafeAreaView ,Text,View,StyleSheet} from "react-native";
import Button from "../components/Button";
function welcome({navigation}){
    function goToMemberSign(){
        navigation.navigate("MemberSignScreen")
    }
    return(
<SafeAreaView style={styles.container}>
    <Text style={styles.header}>Kebap Fitness Salonu</Text>
    <Button text="Üye Kaydı Oluştur" onPress={goToMemberSign}></Button>
</SafeAreaView>
    )
}
const styles=StyleSheet.create({
    container:{flex:1,justifyContent:"center",alignItems:"center"},
    header:{fontSize:30,fontWeight:"bold" ,margin:10}
})
export default welcome