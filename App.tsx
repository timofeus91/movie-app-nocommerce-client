import {StatusBar} from 'expo-status-bar';
import Main from "./screens/Main/Main";
import {NavigationContainer} from "@react-navigation/native";

export default function App() {
    return (
        <>
            <StatusBar style="auto"/>
            <NavigationContainer>
                <Main/>
            </NavigationContainer>

        </>
    );
}
