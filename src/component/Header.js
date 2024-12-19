import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Icon from "@react-native-vector-icons/fontawesome6";
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';

export default function Header() {
  return (
    <View style={styles.viewHeader}>
    <MaterialDesignIcons name={'notebook'} size={30} color={'white'}/>
    <Text style = {styles.styleHeaderTitle}>
        Tasking App
    </Text>
    </View>
  )
}

const styles = StyleSheet.create({
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
})