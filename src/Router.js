import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./pages/Home";
import Game from "./pages/Game";

const Stack = createNativeStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false}}>
                <Stack.Screen name="HomePage" component={Home} />
                <Stack.Screen name="GamePage" component={Game} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Router;