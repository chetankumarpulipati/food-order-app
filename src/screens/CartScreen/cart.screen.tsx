import React, {useState} from 'react';
import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import { RouteProp } from '@react-navigation/native';

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

const CartScreen: React.FC<Props> = ({route}) => {
    const { itemTitle, imageSource, price, qty } = route.params;
    const [qtyy, setQty] = useState(1); // Initialize quantity state
    const temp_price = price * qtyy;

    const increaseQty = () => {
        setQty(qtyy + 1);
    }
    const decreaseQty = () => {
        if (qty > 1) {
            setQty(qtyy - 1);
        }
    }
    const deleteItem = () => {
        console.log('Deleted', {qty}, {itemTitle}, 'from cart');
    }

    console.log('Image Source:', imageSource);
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.item_view}>
                    <Image
                        source = {imageSource}
                        style = {styles.image}
                    />
                    <View style={styles.details}>
                        <Text style={styles.itemTitle}>{itemTitle}</Text>
                        <Text style={styles.qty}>quantity: {qtyy}</Text>
                        <Text style={styles.price}>price: {temp_price} </Text>
                    </View>
                    <View style={styles.actions}>
                        <View style={styles.qtyButtons}>
                            <TouchableOpacity onPress={increaseQty} style={styles.qtyButton}>
                                <Text style={styles.qtyButtonText}>+</Text>
                            </TouchableOpacity>
                            <Text style={styles.qty}>{qtyy}</Text>
                            <TouchableOpacity onPress={decreaseQty} style={styles.qtyButton}>
                                <Text style={styles.qtyButtonText}>-</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity onPress={deleteItem} style={styles.deleteButton}>
                            <Image
                                source = {require('../../assets/images/bin.png')}
                                style = {{width: 30, height: 30}}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

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
});