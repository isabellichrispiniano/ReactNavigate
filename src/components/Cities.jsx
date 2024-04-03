import React from "react";
import { View, Text, Button, StyleSheet, Pressable } from 'react-native';

export default props => {
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#008DDA'
        }}>
            <View>
                <Pressable style={cidades.botao}>
                    <Text style={cidades.texto1}>Paris</Text>
                    <Text>França</Text>
                    
                </Pressable>

            </View>

            <View>
                <Pressable style={cidades.botao2} onPress={() => props.navigation.navigate('Tokyo')}>
                    <Text style={cidades.texto1}>Tokyo</Text>
                    <Text>Japan</Text>
                </Pressable>
            </View>

            <View>
                <Pressable style={cidades.botao}>
                    <Text style={cidades.texto1}>Amsterdam</Text>
                    <Text>Netherlands</Text>
                </Pressable>
            </View>

            <View>
                <Pressable style={cidades.botao2}>
                    <Text style={cidades.texto1}>Portland</Text>
                    <Text>USA</Text>
                </Pressable>
            </View>

            <View>
                <Pressable style={cidades.botao}>
                    <Text style={cidades.texto1}>Mumbai</Text>
                    <Text>India</Text>
                </Pressable>

                <View>
                    <Pressable style={cidades.botao2}>
                        <Text style={cidades.texto1}>London</Text>
                        <Text>England</Text>
                    </Pressable>
                </View>
 
                <View>
                    <Pressable style={cidades.botao}>
                        <Text style={cidades.texto1}>Barcelona</Text>
                        <Text>Spin</Text>
                    </Pressable>
                </View>
                  
                <View>
                    <Pressable style={cidades.botao2}>
                        <Text style={cidades.texto1}>Rio de Janeiro</Text>
                        <Text >Brazil</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

const cidades = StyleSheet.create(
    {
        botao: {
            // flex: 1,
            backgroundColor: '#DDDDDD',
            height: 80,
            width: 391,
            padding: 10,
            margin: 4
        },
        botao2: {
            backgroundColor: '#DDDDDD',
            height: 85,
            width: 395,
            padding: 10,
        },
        texto1:{
            fontSize:20,
            color: 'black'
        }

    }
)