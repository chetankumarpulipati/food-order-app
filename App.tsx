import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen/home.screen';
import cartScreen from './src/screens/CartScreen/cart.screen';
import OrderListScreen from './src/screens/OrderListScreen';
import OrderSuccessScreen from './src/screens/OrderSuccessScreen';
import QuantityScreen from './src/screens/QuantityScreen';
import RestaurantScreen from './src/screens/RestaurantScreen';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="cart" component={cartScreen} />
        <Stack.Screen name="orderList" component={OrderListScreen} />
        <Stack.Screen name="orderSuccess" component={OrderSuccessScreen} />
        <Stack.Screen name="quantity" component={QuantityScreen} />
        <Stack.Screen name="RestaurantScreen" component={RestaurantScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;