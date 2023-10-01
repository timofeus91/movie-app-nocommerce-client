import React from 'react';
import { View, Button, StyleSheet, SafeAreaView } from 'react-native';

 const Main = () =>  {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.buttonContainer}>
                <Button title="Поиск" onPress={() => {}} color="#6200EE" />
            </View>
            <View style={styles.buttonContainer}>
                <Button title="Одиночный выбор" onPress={() => {}} color="#03DAC5" />
            </View>
            <View style={styles.buttonContainer}>
                <Button title="Групповой выбор" onPress={() => {}} color="#018786" />
            </View>
            <View style={styles.buttonContainer}>
                <Button title="Друзья" onPress={() => {}} color="#3700B3" />
            </View>
            <View style={styles.buttonContainer}>
                <Button title="Профиль" onPress={() => {}} color="#BB86FC" />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        justifyContent: 'center',
    },
    buttonContainer: {
        margin: 10,
    }
});

 export default Main
