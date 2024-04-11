import React from "react";
import {View, Text, Button, StyleSheet,} from 'react-native';

export default props =>{
    return(
        <View style={{
            flex:1,
            alignItems:'center',
            backgroundColor:'white', 
            
        }}>
          
          <Text style={tokyo.texto}>No location for this City!</Text>

    <View style={tokyo.botao}>
          <Button title="Location name"/>
    </View>
          
          <Button title="Location info"/>
          <Button title="Add location"/>
        </View>
    )
}

const tokyo =StyleSheet.create(
    {
        texto:{
            borderBottomColor:'#008DDA',
            borderBottomWidth:5,
            width:'100%',
            margin:250,
            padding:10
        },
        botao:{
            margin:10,
            width:500
        }
    }
)