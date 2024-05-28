import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen/home.screen';
import cartScreen from './src/screens/CartScreen/cart.screen';
import OrderListScreen from './src/screens/OrderListScreen';
import OrderSuccessScreen from './src/screens/OrderSuccessScreen';
import QuantityScreen from './src/screens/QuantityScreen';
import RestaurantScreen from './src/screens/RestaurantScreen';
import DashboardScreen from './src/screens/DashboardScreen/dashboard.screen';
import { RouteProp } from '@react-navigation/native';
import {Image, LogBox} from 'react-native';


type RootStackParamList = {
    Home: undefined;
    cart: undefined;
    orderList: undefined;
    orderSuccess: undefined;
    QuantityScreen: { itemTitle: string };
    RestaurantScreen: undefined;
    dashboard: undefined;
};

type QuantityScreenRouteProp = RouteProp<RootStackParamList, 'QuantityScreen'>;

type Props = {
    route: QuantityScreenRouteProp;
};

const Stack = createStackNavigator<RootStackParamList>();
LogBox.ignoreLogs(['Warning: Found screens with the same name nested inside one another.']);

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="dashboard"
                    component={DashboardScreen}
                    options={{
                        headerTitle: () => (
                            <Image
                                source={require('./android/app/src/main/res/mipmap-mdpi/ic_launcher.png')}
                                style={{ width: 50, height: 50, borderRadius: 5}}
                            />
                        ),
                        headerTitleAlign: 'center',
                        headerStyle: { backgroundColor: 'grey', height: 80},
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                />
                <Stack.Screen
                    name="cart"
                    component={cartScreen}
                    options={{
                        headerShown: false, // Hide the header
                    }}
                />
                <Stack.Screen
                    name="orderList"
                    component={OrderListScreen}
                    options={{
                        headerTitleAlign: 'center',
                    }}
                />
                <Stack.Screen
                    name="orderSuccess"
                    component={OrderSuccessScreen}
                    options={{
                        headerTitleAlign: 'center',
                    }}
                />
                <Stack.Screen
                    name="QuantityScreen"
                    component={QuantityScreen}
                    options={({ route }) => ({
                        title: route.params.itemTitle,
                        headerTitleAlign: 'center',
                    })}
                />
                <Stack.Screen
                    name="RestaurantScreen"
                    component={RestaurantScreen}
                    options={{
                        headerTitleAlign: 'center',
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;