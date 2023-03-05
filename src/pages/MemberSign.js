import React ,{useState}from "react";
import {  SafeAreaView,View,Text,Alert } from "react-native";
import Input from "../components/Input"
import Button from "../components/Button"

function MemberSign({navigation}){
    const[userName,setUsername]=useState(null)
    const[userSurname,setUsersurname]=useState(null)
    const[userAge,setUserage]=useState(null)
    const[userMail,setuserMail]=useState(null)
    const[userCity,setUsercity]=useState(null)
    function handleSubmit(){
        if(
            !userName ||
            !userSurname||
            !userAge||
            !userMail||
            !userCity
        ){ Alert.alert("Kebap Fitness Salonu","Bilgiler Boş Bırakılamaz!")
    return}
        const user={
            userName,
            userSurname,
            userAge,
            userMail,
            userCity
        }
        console.log(user)
        navigation.navigate("MemberResultScreen",{user})
    }
    return(
        <SafeAreaView>
            <Input label="Üye Adı" placeHolder={"Üyenin adını giriniz"} onChangeText={setUsername}></Input>
            <Input label="Üye Soyadı" placeHolder={"Üyenin soyadını giriniz"} onChangeText={setUsersurname}></Input>
            <Input label="Üye Yaşı" placeHolder={"Üyenin yaşını giriniz"} onChangeText={setUserage}></Input>
            <Input label="Üye E-posta" placeHolder={"Üyenin e-postasını giriniz"} onChangeText={setuserMail}></Input>
            <Input label="Üye yaşadığı şehri" placeHolder={"Üyenin yaşadığı şehri giriniz"} onChangeText={setUsercity}></Input>
            <Button text ="Kaydı Tamamla" onPress={handleSubmit}></Button>
        </SafeAreaView>
    )
}
export default MemberSign