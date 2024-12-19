import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './src/screens/Home'
import {Header} from './src/component/Index'

export default function App2() {
  return (
  <View style={{flex:1}}>
    <Header/>
    <View style={styles.container}>
      <Home />
    </View>
  </View> 
)
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    width:'100%',
    maxWidth:480,
    alignSelf:'center'
  }
})