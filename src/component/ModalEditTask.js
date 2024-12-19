import {StyleSheet, 
        Text, 
        View,
        Modal,
        Pressable,
        TouchableOpacity,
        TextInput
    } from 'react-native'
import React from 'react'
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';

export default function ModalEditTask({ modalVisible, 
                                        modalOnRequestClose,
                                        onPressPressable, 
                                        onpressClose,
                                        valueTextInputTitle,
                                        textInputOnChangeText,
                                        onpressEdit
                                    }) {
  return (
            <Modal visible={modalVisible} transparent={true} animationType="fade" onRequestClose={modalOnRequestClose}>
                <View style={styles.modalAlignment}>
                    <Pressable style={styles.modalBackdrop} onPress={onPressPressable}/>
                        <View style={styles.modalContainer}>
                            <View style={styles.modalHeader}>
                                <MaterialDesignIcons name={"notebook-edit"} size={21} color={'black'}/>
                                <Text>Edit task</Text>  
                                <TouchableOpacity onPress={onpressClose}>
                                    <MaterialDesignIcons name={"close-circle"} size={21} color={'tomato'}/>
                                </TouchableOpacity>
                            </View>
                            <TextInput placeholder="Edit Task" 
                            underlineColorAndroid={'skyblue'} 
                            style={{marginHorizontal:30, paddingHorizontal:10}}
                            value={valueTextInputTitle}
                            onChangeText={textInputOnChangeText}
                            />   
                            <TouchableOpacity style={styles.btnEditTask} onPress={onpressEdit}>
                                <Text style={styles.textBtnEdit}>Edit</Text>
                            </TouchableOpacity>
                        </View>

                </View>
            </Modal>
  )
}

const styles = StyleSheet.create({
    modalBackdrop:{
        backgroundColor:"black",
        position:'absolute',
        height:'100%',
        width:'100%',
        opacity:0.4
    },
    textBtnEdit:{
        color:'white',
        fontWeight:'bold',
        fontSize:17
    },
    btnEditTask:{
        backgroundColor:'skyblue',
        alignSelf:'center',
        width: 120,
        height:40,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        elevation:5
    },
    modalHeader:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:'90%',

    },
    modalContainer:{
        backgroundColor:'white',
        // flex:1,
        // width:'90%',
        elevation:10,
        padding:20,
        borderRadius:20

    },
    modalAlignment:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
})