import React, { useState } from "react";
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

export default props => {

    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            backgroundColor: '#008DDA'
        }}>
            <Text style={cadastro.nome}>Cities</Text>

            <View style={cadastro.tokyo}>
                <TextInput style={cadastro.cidade}
                    placeholder="Tokyo"
                />
            </View>
            <TextInput style={cadastro.cidade}
                placeholder="Japan"
            />
 
           <View style={cadastro.botao}>
          <Button title="Add City" color={"#31363F"}
           onPress={() => props.navigation.navigate('cidade')}
          />
          </View>
        </View>
    )
}

const cadastro = StyleSheet.create(
    {
        cidade: {
            backgroundColor: '#EEEEEE',
            borderRadius: 15,
            width: 300,
            flexDirection: 'row'
        },
        nome: {
            color: 'white',
            fontSize: 30,
            margin: 40,
            padding:60
        },
        tokyo: {
            padding: 20
        },
        botao:{
            flexGrow:1,
            margin: 10,
            width: 200,
            height: 60
        }
    }
)