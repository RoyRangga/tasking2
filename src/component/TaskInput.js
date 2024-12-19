import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';


export default function TaskInput({onChangeText, value, onPress, disabled}) {
  return (
    <View style={styles.viewInput}>
    <View style={styles.viewTextInput}>
        <TextInput placeholder="Input Task" onChangeText={onChangeText} style={styles.textInput} value={value}/>
    </View>
    <View style={{width:20}}/>
        <TouchableOpacity style={styles.btnAddTask}>
            <MaterialDesignIcons name={'plus'} size={30} color={'white'} onPress={onPress} disabled={disabled}/>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    btnAddTask:{
        backgroundColor:'skyblue',
        height:50,
        width:50,
        borderRadius:25,
        alignItems:'center',
        justifyContent:'center',
        // borderWidth: 1,
        padding:0
    },
    viewInput:{
        flexDirection:'row',
        margin:20,
    },
    viewTextInput:{
        backgroundColor:'#ECECEC',
        height:50,
        borderRadius:25,
        flex:1,
        paddingHorizontal:20,
    },
    textInput: {
        flex: 1, // Membuat TextInput memenuhi lebar View induk
        // paddingHorizontal: 10, // Opsional, untuk memberi ruang horizontal
        fontSize: 16 // Opsional, untuk tampilan teks lebih besar
    },


})