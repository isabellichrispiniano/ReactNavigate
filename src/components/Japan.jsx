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
        </View>
    )
}

const tokyo =StyleSheet.create(
    {
        texto:{
            width:'100%',
            
        }
    }
)