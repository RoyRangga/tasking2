import { View, Text, StyleSheet } from "react-native";
import React, {useState} from "react";
import Icon from "@react-native-vector-icons/fontawesome6";
import CheckBox from '@react-native-community/checkbox';

export default function App(){
    const [done, setDone] = useState(false);
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    return(
        <View>
            <Text>Todo list App</Text>
            <Icon name={"trash-can"} size={40} color={'skyblue'}/>
            <CheckBox disabled={false} value={done} onValueChange={()=>setDone(!done)}/>
            <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={(toggleCheckBox) => setToggleCheckBox(toggleCheckBox)}
            />
        </View>
        
    )
}