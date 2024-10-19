import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import BottomTabNavigator from "./navigation/BottomTabNavigator/BottomTabNavigator";


export default function App() {
    return (

            <NavigationContainer>
                <BottomTabNavigator />
            </NavigationContainer>



    );
}
