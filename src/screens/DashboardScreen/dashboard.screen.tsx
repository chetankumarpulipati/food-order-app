import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../HomeScreen/home.screen';
import CartScreen from '../CartScreen/cart.screen';
import ProfileScreen from '../ProfileScreen/profile.screen';
import { Image } from 'react-native';

const Tab = createBottomTabNavigator();
const DashboardScreen = () => {
    const homeIcon = require('../../assets/images/home.png');
    const cartIcon = require('../../assets/images/cart.png');
    const profileIcon = require('../../assets/images/person.png');
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name="Home" component={HomeScreen}
                        options={{
                            tabBarIcon: ({ focused, color, size }) => (
                                <Image
                                    source={homeIcon}
                                    style={{width: size, height: size, tintColor: color}}
                                />
                            ),
                        }}
            />
            <Tab.Screen name="Cart" component={CartScreen}
                        options={{
                            tabBarIcon: ({ focused, color, size }) => (
                                <Image
                                    source={cartIcon}
                                    style={{width: size, height: size, tintColor: color}}
                                />
                            ),
                        }}/>
            <Tab.Screen name="Profile" component={ProfileScreen}
                        options={{
                            tabBarIcon: ({ focused, color, size }) => (
                                <Image
                                    source={profileIcon}
                                    style={{width: size, height: size, tintColor: color}}
                                />
                            ),
                        }}/>
        </Tab.Navigator>
    );
}

export default DashboardScreen;