import React, {useEffect, useState} from 'react';
<<<<<<< HEAD
import {Image, RefreshControl, ScrollView, StyleSheet,Alert, Text, TouchableOpacity, View} from "react-native";
=======
import {Image, RefreshControl, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
>>>>>>> 869b4a2fbe580eb5968eb799a3912bdac1ea44d7
import { RouteProp } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';
import QuantityScreen from "../QuantityScreen";
<<<<<<< HEAD
import { Button } from 'react-native';
import axios from 'axios';
=======
>>>>>>> 869b4a2fbe580eb5968eb799a3912bdac1ea44d7

type RootStackParamList = {
    CartScreen: {
        itemTitle: string;
        imageSource: any;
        price: number;
        qty: number;
    };
};

type CartScreenRouteProp = RouteProp<RootStackParamList, 'CartScreen'>;

interface Props {
    route: CartScreenRouteProp;
}


interface CartItem {
    itemTitle: string;
    imageSource: any;
    price: number;
    qty: number;
}

const CartScreen: React.FC<Props> = ({route},{navigation}) => {
    const { itemTitle, imageSource, price, qty } = route.params
        ? route.params
        : { itemTitle: '', imageSource: null, price: 0, qty: 0 };
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [qtyy, setQty] = useState(1); // Initialize quantity state
    const temp_price = price * qtyy;
    const isFocused = useIsFocused();
    const [refreshing, setRefreshing] = useState(false);
    const [orderPlaced, setOrderPlaced] = useState(false);

    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('@cart');
            return jsonValue != null ? JSON.parse(jsonValue) : [];
        } catch(e) {
            console.log(e);
        }
    }
    const fetchCartItems = async () => {
        const items = await getData();
        setCartItems(items);
    }
    const increaseQty = (index) => {
        setCartItems(prevCartItems => prevCartItems.map((item, i) =>
            i === index ? {...item, qty: item.qty + 1, price: item.price * (item.qty + 1)} : item
        ));
    }
    const decreaseQty = (index) => {
        setCartItems(prevCartItems => prevCartItems.map((item, i) =>
            i === index && item.qty > 1 ? {...item, qty: item.qty - 1, price: (item.price / item.qty) * (item.qty - 1)} : item
        ));
    }
    const deleteItem = (index) => {
        setCartItems(prevCartItems => prevCartItems.filter((item, i) => i !== index));
    }
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        fetchCartItems().then(() => setRefreshing(false));
    }, []);
    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
<<<<<<< HEAD
    const handlePlaceOrder = async () => {
        const orderDetails = {
          // ... gather order details from user selections
        };
      
        try {
          const response = await axios.post('http://localhost:5000/api/orders', orderDetails);
          console.log('Order placed:', response.data);
          // Show success message to the user
        } catch (error) {
          console.error(error);
          // Show error message to the user
        }
      };
    
=======

>>>>>>> 869b4a2fbe580eb5968eb799a3912bdac1ea44d7

    useEffect(() => {
        const fetchCartItems = async () => {
            const items = await getData();
            setCartItems(items);
        }
        fetchCartItems();
    }, []);
    useEffect(() => {
        const fetchCartItems = async () => {
            const items = await getData();
            setCartItems(items);
        }
        fetchCartItems();
    }, [isFocused]);
    useEffect(() => {
        fetchCartItems();
    }, [isFocused]);

    // console.log('Image Source:', imageSource);
    return (
        <ScrollView
            contentContainerStyle={{flexGrow: 1}}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
        >
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={styles.totalPrice}>Total Price: ₹{totalPrice}</Text>
                {cartItems.length === 0 ? (
                    <Text>No items added to cart</Text>
                ) : (
                    cartItems.map((item, index) => (
                        <View style={styles.item_view}>
                            <Image
                                source = {item.imageSource}
                                style = {styles.image}
                            />
                            <View style={styles.details}>
                                <Text style={styles.itemTitle}>{item.itemTitle}</Text>
                                <Text style={styles.qty}>quantity: {item.qty}</Text>
                                <Text style={styles.price}>price: {item.price} </Text>
                            </View>
                            <View style={styles.actions}>
                                <View style={styles.qtyButtons}>
                                    <TouchableOpacity onPress={() => increaseQty(index)} style={styles.qtyButton}>
                                        <Text style={styles.qtyButtonText}>+</Text>
                                    </TouchableOpacity>
                                    <Text style={styles.qty}>{item.qty}</Text>
                                    <TouchableOpacity onPress={() => decreaseQty(index)} style={styles.qtyButton}>
                                        <Text style={styles.qtyButtonText}>-</Text>
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity onPress={() => deleteItem(index)} style={styles.deleteButton}>
                                    <Image
                                        source = {require('../../assets/images/bin.png')}
                                        style = {{width: 30, height: 30}}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))
                )}
<<<<<<< HEAD
            <Button title="Place Order" onPress={handlePlaceOrder} />
            </View>
        </ScrollView>
    )}
=======
            </View>
        </ScrollView>
    )
}
>>>>>>> 869b4a2fbe580eb5968eb799a3912bdac1ea44d7

export default CartScreen;

const styles = StyleSheet.create({
    container: {
        margin: 10,
    },
    itemTitle: {
        fontSize: 20,
        fontWeight: "bold",
    },
    item_view:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 350,
        margin: 10,
        alignItems: 'center',
        backgroundColor: 'lightgrey',
        padding: 10,
        borderRadius: 10,
        height: 150,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 20,
        marginLeft: 10,
    },
    qty: {
        fontSize: 15,
    },
    price: {
        fontSize: 15,
    },
    qtyButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between', // Add this line
        width: 60,
        margin: 10,
        alignItems: 'center',
        backgroundColor: 'lightgrey',
        padding: 10,
        borderRadius: 10,
    },
    qtyButton: {
        backgroundColor: 'blue',
        color: 'white',
        padding: 5,
        borderRadius: 10,
        fontSize: 40,
        fontWeight: 'bold',
        width: 25,
    },
    qtyButtonText: {
        color: 'white',
    },
    deleteButton: {
        backgroundColor: 'red',
        color: 'white',
        padding: 5,
        borderRadius: 10,
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    deleteButtonText: {
        color: 'white',
    },
    details: {
        flex: 1,
        padding: 10,
        justifyContent: 'space-between',
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    totalPrice: {
        fontSize: 20,
        fontWeight: "bold",
        margin: 10,
    },
});