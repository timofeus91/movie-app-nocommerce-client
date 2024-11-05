import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import GeneralButton from "../../components/GeneralButton/GeneralButton";

type SettingOption = {
    id: string;
    title: string;
    action: () => void;
};

const settingsOptions: SettingOption[] = [
    { id: '1', title: 'Option 1', action: () => alert('Option 1 selected') },
    { id: '2', title: 'Option 2', action: () => alert('Option 2 selected') },
    { id: '3', title: 'Option 3', action: () => alert('Option 3 selected') },
];

const SettingsScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Settings</Text>
            <View style={styles.listWrapper}>
                {settingsOptions.map((option) => (
                    <GeneralButton
                        key={option.id}
                        title={option.title}
                        onPress={option.action}
                        style={styles.button}
                    />
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f0f0f0',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    listWrapper: {
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 8,
        elevation: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
    },
    button: {
        marginBottom: 12,
    },
});

export default SettingsScreen;
