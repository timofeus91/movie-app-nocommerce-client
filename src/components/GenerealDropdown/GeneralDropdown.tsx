import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Для стрелок (понадобится expo install @expo/vector-icons)

type DropdownProps = {
    title: string;
    children: React.ReactNode;
};

const Dropdown: React.FC<DropdownProps> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.header} onPress={toggleDropdown}>
                <Text style={styles.title}>{title}</Text>
                <FontAwesome name={isOpen ? "angle-up" : "angle-down"} size={24} color="black" />
            </TouchableOpacity>
            {isOpen && <View style={styles.content}>{children}</View>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 8,
        borderRadius: 8,
        backgroundColor: '#f9f9f9',
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#ddd',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#e0e0e0',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    content: {
        padding: 16,
        backgroundColor: '#fff',
    },
});

export default Dropdown;
