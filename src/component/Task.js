import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import CheckBox from 'expo-checkbox';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';

export default function Task({tasks, onPressCheckbox, onPressEdit, onPressDelete}) {
  return (
    <View key={tasks.id} style={styles.viewTask}>
    <CheckBox value={tasks.done} onValueChange={()=> onPressCheckbox(tasks.id)}/>
    <View style={{width:20}}/>
    <View style={styles.viewTaskContent}>
        <Text style={styles.taskTitle}>{tasks.title}</Text>
        <View style={styles.line}/>
        <View>
            <TouchableOpacity style={{...styles.btnOption, backgroundColor:'skyblue'}}
            onPress={onPressEdit}>
                <MaterialDesignIcons name={'pencil'} size={21} color={'white'}/>
            </TouchableOpacity>
            <View style={{height:10}}/>
            <TouchableOpacity style={{...styles.btnOption, backgroundColor:'tomato'}}
            onPress={onPressDelete}>
                <MaterialDesignIcons name={'trash-can'} size={21} color={'white'}/>
            </TouchableOpacity>
        </View>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    btnOption:{
        backgroundColor:'white',
        elevation:5,
        borderRadius:10,
        height:35,
        width:35,
        justifyContent:'center',
        alignItems:'center'
    },
    line:{
        backgroundColor:'black',
        width: StyleSheet.hairlineWidth,
        height:50,
        marginHorizontal:15
    },
    taskTitle:{
        color:'black',
        fontWeight:'500',
        fontSize:15,
        flex:1,

    },
    viewTaskContent:{
        backgroundColor:'white',
        elevation:30,
        flexDirection:'row',
        alignItems:'center',
        flex:1,
        borderRadius:10,
        padding:10,
        paddingHorizontal:15
    },
    viewTask:{
        flexDirection:'row',
        margin:20,
        marginTop:0,
        alignItems:'center',

    },
})