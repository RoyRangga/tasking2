import Icon from '@react-native-vector-icons/fontawesome6';
import Icon2 from '@react-native-vector-icons/fontello';
import Icon3 from '@react-native-vector-icons/fontawesome';
import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function App(){
    return (
        <View style={styles.container}>
            <Icon name={'comments'} size={40} color={'skyblue'}/>
            <Icon3 name={'home'} size={40} color={'pink'}/>
            <Text style={styles.font}>
                FufuFafa
            </Text>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            backgroundColor:'white',
            alignContent:'center',
            justifyContent:'center',
            alignSelf:'center'
        },
        font:{
            color:'black',
            fontSize:40,
            fontWeight:'bold',
            textAlign:'center'
        }
    }
)