import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./components/Login";
import Cities from "./components/Cities";
import Japan from "./components/Japan";

const Stack = createNativeStackNavigator();

export default () => {
    return(
        <SafeAreaView style={{flex: 1}}>
            <NavigationContainer>
            <Stack.Navigator initialRouteName="Cities">
                 <Stack.Screen name="escolha" component={Login} options={{headerStyle:{backgroundColor:"#008DDA"}}} />
                 <Stack.Screen name="cidade" component={Cities} options={{headerStyle:{backgroundColor:"#008DDA"}}} /> 
                 <Stack.Screen name="Tokyo" component={Japan} />
            </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}