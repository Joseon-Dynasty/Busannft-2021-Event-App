import { createStackNavigator } from "@react-navigation/stack";
import * as React from 'react';

import MainScreen from "../screens/MainScreen";
import PhoneScreen from "../screens/PhoneScreen";
import StartScreen from "../screens/StartScreen";

const Stack = createStackNavigator();

const Navigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false, animationEnabled: false }}>
            <Stack.Screen
                name="Start"
                component={StartScreen}
            />
            <Stack.Screen
                name="Main"
                component={MainScreen}
            />
            <Stack.Screen
                name="Phone"
                component={PhoneScreen}
            />
        </Stack.Navigator>
    )
};

const DefaultNavigator = () => {
    return (
        <>
            <Navigator />
        </>
    )
}

export default DefaultNavigator;