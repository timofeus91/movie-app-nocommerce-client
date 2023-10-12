import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f2f2f2', // светлый фон
    },
    input: {
        marginBottom: 20,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        backgroundColor: '#fff',
    },
    buttonGroup: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    button: {
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 10,
        backgroundColor: '#fff',
    },
    categoryButton: {
        marginRight: 10,
    },
    buttonSelected: {
        backgroundColor: '#e0e0e0',
    },
    buttonText: {
        textAlign: 'center',
    },
    submitButton: {
        padding: 15,
        borderRadius: 5,
        backgroundColor: '#4CAF50',
        alignItems: 'center',
    },
    submitButtonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default styles;
