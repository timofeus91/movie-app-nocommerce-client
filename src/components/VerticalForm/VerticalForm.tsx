import React, {FC} from 'react';
import { View, StyleSheet } from 'react-native';

type VerticalForm = {
    children: React.ReactNode;
}

const VerticalForm: FC<VerticalForm> = ({ children,  }) => {
    return (
        <View style={styles.container}>
            {React.Children.map(children, (child) => (
                <View style={styles.itemContainer}>{child}</View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#fff',
    },
    itemContainer: {
        marginBottom: 16, // Отступ между элементами
    },
});

export default VerticalForm;
