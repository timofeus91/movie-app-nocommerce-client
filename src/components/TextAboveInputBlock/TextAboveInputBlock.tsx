import React, {FC} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

type TTextAboveInputBlock = {
    label: string;
    placeholder: string;
    onChangeText: (text: string) => void;
    valueInput: string;
}

const TextAboveInputBlock: FC<TTextAboveInputBlock> = ({label, placeholder, onChangeText, valueInput}) => {


    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                style={styles.input}
                value={valueInput}
                placeholder={placeholder}
                onChangeText={onChangeText}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        paddingHorizontal: 16,
    },
    label: {
        fontSize: 16,
        color: '#333',
        marginBottom: 8,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        fontSize: 16,
        color: '#333',
    },
});

export default TextAboveInputBlock;
