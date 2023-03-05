import React from "react";
import {View,Text,TextInput} from "react-native"
import styles from "./Input.style"
function Input ({label,onChangeText,placeHolder}){
    return(
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.input_container}>
        <TextInput onChangeText={onChangeText} placeholder={placeHolder}/>
        </View >
        </View>
    )
}
export default Input