import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, ScrollView, Alert} from 'react-native';
import styles from './SearchScreenStyles';
import {categories, types} from "./SearchScreenConstants";

const SearchScreen = () => {
    const [movieTitle, setMovieTitle] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('Все');
    const [selectedType, setSelectedType] = useState('');

    const handleSubmit = () => {
        Alert.alert(
            'Отправка данных',
            `Название: ${movieTitle}\nКатегория: ${selectedCategory}\nТип: ${selectedType}`
        );
        // здесь вы можете добавить функциональность для отправки данных на сервер
    };

    return (
        <ScrollView style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Название фильма"
                value={movieTitle}
                onChangeText={setMovieTitle}
            />

            <View style={styles.buttonGroup}>
                {categories.map((category) => (
                    <TouchableOpacity
                        key={category}
                        style={[styles.button, styles.categoryButton, selectedCategory === category && styles.buttonSelected]}
                        onPress={() => setSelectedCategory(category)}
                    >
                        <Text style={styles.buttonText}>{category}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            <View style={styles.buttonGroup}>
                {types.map((type) => (
                    <TouchableOpacity
                        key={type}
                        style={[styles.button, selectedType === type && styles.buttonSelected]}
                        onPress={() => setSelectedType(type)}
                    >
                        <Text style={styles.buttonText}>{type}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                <Text style={styles.submitButtonText}>Отправить</Text>
            </TouchableOpacity>
        </ScrollView>
    );

}


export default SearchScreen;
