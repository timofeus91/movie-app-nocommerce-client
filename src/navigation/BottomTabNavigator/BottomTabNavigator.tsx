import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Search"
                component={SearchScreen}
                options={{
                    tabBarIcon: ({ color }) => <Icon name="search" size={20} color={color} />,
                    tabBarLabel: () => <Text style={styles.label}>Search</Text>,
                }}
            />
            <Tab.Screen
                name="RandomSearch"
                component={RandomSearchScreen}
                options={{
                    tabBarIcon: ({ color }) => <Icon name="random" size={20} color={color} />,
                    tabBarLabel: () => <Text style={styles.label}>Random Search</Text>,
                }}
            />
            <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    tabBarIcon: ({ color }) => <Icon name="cog" size={20} color={color} />,
                    tabBarLabel: () => <Text style={styles.label}>Settings</Text>,
                }}
            />
        </Tab.Navigator>
    );
};

const SearchScreen = () => (
    <View style={styles.screen}>
        <Text>Search Screen</Text>
    </View>
);

const RandomSearchScreen = () => (
    <View style={styles.screen}>
        <Text>Random Search Screen</Text>
    </View>
);

const SettingsScreen = () => (
    <View style={styles.screen}>
        <Text>Settings Screen</Text>
    </View>
);

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        fontSize: 12,
    },
});

export default BottomTabNavigator;
