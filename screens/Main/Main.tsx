import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import ProfileScreen from "../ProfileScreen/ProfileScreen";
import SearchScreen from "../SearchScreen/SearchScreen";
import SingleChoiceScreen from "../SingleChoiceScreen/SingleChoiceScreen";
import GroupChoiceScreen from "../GroupChoiceScreen/GroupChoiceScreen";
import FriendsScreen from "../FriendsScreen/FriendsScreen";

const Tab = createBottomTabNavigator();

const Main = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#6200EE',
                tabBarInactiveTintColor: 'gray',
                tabBarLabelStyle: {fontSize: 12},
                tabBarStyle: {backgroundColor: '#121212'},
                headerShown: false,
            }}
        >
            <Tab.Screen
                name="Search"
                component={SearchScreen}
                options={{tabBarLabel: 'Поиск'}}
            />
            <Tab.Screen
                name="SingleChoice"
                component={SingleChoiceScreen}
                options={{tabBarLabel: 'Одиночный выбор'}}
            />

            <Tab.Screen
                name="GroupChoice"
                component={GroupChoiceScreen}
                options={{tabBarLabel: 'Групповой выбор'}}
            />

            {/* <Tab.Screen
             name="Friends"
             component={FriendsScreen}
             options={{ tabBarLabel: 'Друзья' }}
         />

         <Tab.Screen
             name="Profile"
             component={ProfileScreen}
             options={{ tabBarLabel: 'Профиль' }}
         />*/}
        </Tab.Navigator>
    );
}

export default Main
