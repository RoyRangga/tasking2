import { View, Text, StyleSheet, StatusBar, TextInput, Touchable, TouchableOpacity, Modal, Pressable} from "react-native";
import React, {useState} from "react";
import Icon from "@react-native-vector-icons/fontawesome6";
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import { createIconSet } from "@react-native-vector-icons/common";
import CheckBox from '@react-native-community/checkbox';

export default function App(){
    const [modalVisible, setModalVisible] = useState(false)
    return(
        <View style={{flex:1}}>
        <StatusBar backgroundColor={'#370074'}/>

            {/* Header */}
            <View style={styles.viewHeader}>
                <MaterialDesignIcons name={'notebook'} size={30} color={'white'}/>
                <Text style = {styles.styleHeaderTitle}>
                    Tasking App
                </Text>
            </View>
            

            {/* Input Tasks */}
            <View style={styles.viewInput}>
                <View style={styles.viewTextInput}>
                    <TextInput placeholder="Input Task" style={styles.textInput}/>
                </View>
                <View style={{width:20}}/>
                    <TouchableOpacity style={styles.btnAddTask}>
                        <MaterialDesignIcons name={'plus'} size={30} color={'white'}/>
                    </TouchableOpacity>
            </View>

            {/* Render tugas */}
            <View style={styles.viewTask}>
                <CheckBox/>
                <View style={styles.viewTaskContent}>
                    <Text style={styles.taskTitle}>Task</Text>
                    <View style={styles.line}/>
                    <View>
                        <TouchableOpacity style={{...styles.btnOption, backgroundColor:'skyblue'}}
                        onPress={()=> setModalVisible(true)}>
                            <MaterialDesignIcons name={'pencil'} size={21} color={'white'}/>
                        </TouchableOpacity>
                        <View style={{height:10}}/>
                        <TouchableOpacity style={{...styles.btnOption, backgroundColor:'tomato'}}>
                            <MaterialDesignIcons name={'trash-can'} size={21} color={'white'}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            {/* Modal render tugas */}
            <Modal visible={modalVisible} transparent={true} animationType="fade" onRequestClose={()=> setModalVisible(false)}>
                <View style={styles.modalAlignment}>
                    <Pressable style={styles.modalBackdrop} onPress={()=> setModalVisible(false)}/>
                        <View style={styles.modalContainer}>
                            <View style={styles.modalHeader}>
                            <MaterialDesignIcons name={"notebook-edit"} size={21} color={'black'}/>
                            <Text>Edit task</Text>  
                            <TouchableOpacity onPress={()=> setModalVisible(false)}>
                            <MaterialDesignIcons name={"close-circle"} size={21} color={'tomato'}/>
                            </TouchableOpacity>
                            </View>
                            <TextInput placeholder="Edit Task" underlineColorAndroid={'skyblue'} 
                            style={{marginHorizontal:30, paddingHorizontal:10}}/>   
                            <TouchableOpacity style={styles.btnEditTask}>
                                <Text style={styles.textBtnEdit}>Edit</Text>
                            </TouchableOpacity>
                        </View>

                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create(
    {
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
        textInput: {
            flex: 1, // Membuat TextInput memenuhi lebar View induk
            // paddingHorizontal: 10, // Opsional, untuk memberi ruang horizontal
            fontSize: 16 // Opsional, untuk tampilan teks lebih besar
        },        
        viewTextInput:{
            backgroundColor:'#ECECEC',
            height:50,
            borderRadius:25,
            flex:1,
            paddingHorizontal:20,
            

        },
        viewInput:{
            flexDirection:'row',
            margin:20,
            
        },
        styleHeaderTitle:{
            color:'white',
            fontWeight:'bold',
            marginHorizontal:10,
            fontSize:15
        },
        viewHeader:{
            backgroundColor:'skyblue',
            height:50,
            elevation:40,
            flexDirection:'row',
            alignItems:'center',
            paddingHorizontal:15,
        }
    }
)