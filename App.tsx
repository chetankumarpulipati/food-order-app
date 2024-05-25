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
import { LogBox } from 'react-native';


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
                    name="Home"
                    component={DashboardScreen}
                    options={{
                        headerShown: false,
                        headerTitleAlign: 'center',
                        headerStyle: { backgroundColor: 'grey' },
                    }}
                />
                <Stack.Screen
                    name="cart"
                    component={cartScreen}
                    options={{
                        headerTitleAlign: 'center',
                        headerStyle: { backgroundColor: 'black' },
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