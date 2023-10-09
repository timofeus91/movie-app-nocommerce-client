import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SearchScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Здесь будет ваш контент</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f7f7f7'
    },
    text: {
        fontSize: 18,
        color: '#333',
    }
});

export default SearchScreen;
