import React, {useEffect, useState} from "react";
import {View, Text, StyleSheet, Image, Pressable, Touchable, TouchableHighlight, ScrollView} from "react-native";
import { RouteProp } from '@react-navigation/native';
import {TouchableNativeFeedback} from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native'; // Import useNavigation
import CartScreen from "../CartScreen";


type RootStackParamList = {
    QuantityScreen: {
        itemTitle: string,
        description: string,
        price: number,
        imageSource: any,
        additionalDescription: string,
    };
};

type QuantityScreenRouteProp = RouteProp<RootStackParamList, 'QuantityScreen'>;

type Props = {
    route: QuantityScreenRouteProp;
};

const additionalDescription = [
    {
        name: "Pizza",
        description: "Pizza is a savory dish of Italian origin consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients (such as anchovies, mushrooms, onions, olives, pineapple, meat, etc.) which is then baked at a high temperature, traditionally in a wood-fired oven.",
    },
    {
        name: "Burger",
        description: "A hamburger (also burger for short) is a sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun. The patty may be pan fried, grilled, smoked or flame broiled.",
    },
    {
        name: "Pasta",
        description: "Pasta is a type of food typically made from an unleavened dough of wheat flour mixed with water or eggs, and formed into sheets or other shapes, then cooked by boiling or baking.",
    },
    {
        name: "Sandwich",
        description: "A sandwich is a food typically consisting of vegetables, sliced cheese or meat, placed on or between slices of bread, or more generally any dish wherein bread serves as a container or wrapper for another food type.",
    },
    {
        name: "Salad",
        description: "A salad is a dish consisting of mixed pieces of food, sometimes with at least one raw ingredient. It is often dressed, and is typically served at room temperature or chilled, though some can be served warm.",
    },
    {
        name: "Cake",
        description: "Cake is a form of sweet food made from flour, sugar, and other ingredients, that is usually baked. In their oldest forms, cakes were modifications of bread, but cakes now cover a wide range of preparations that can be simple or elaborate, and that share features with other desserts such as pastries, meringues, custards, and pies.",
    },
    {
        name: "Ice Cream",
        description: "Ice cream (derived from earlier iced cream or cream ice) is a sweetened frozen food typically eaten as a snack or dessert. It may be made from dairy milk or cream and is flavoured with a sweetener, either sugar or an alternative, and any spice, such as cocoa or vanilla.",
    },
    {
        name: "Coffee",
        description: "Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species. When coffee berries turn from green to bright red in color – indicating ripeness – they are picked, processed, and dried.",
    },
    {
        name: "Tea",
        description: "Tea is an aromatic beverage commonly prepared by pouring hot or boiling water over cured or fresh tea leaves, usually served hot or cold.",
    },
]
const getAdditionalDescription = (itemTitle: string) => {
    const item = additionalDescription.find(item => item.name === itemTitle);
    return item ? item.description : '';
}

const QuantityScreen: React.FC<Props> = ({ route }) => {
    // @ts-ignore
    const navigation = useNavigation(); // Add this line to get the navigation prop
    const { itemTitle, imageSource, description, price } = route.params; // Remove additionalDescription from here
    const [qty, setQty] = useState(1); // Initialize quantity state
    const increaseQty = () => {
        // console.log('Clicked on +');
        setQty(qty + 1);
    }
    const decreaseQty = () => {
        if (qty > 1) {
            // console.log('Clicked on -');
            setQty(qty - 1); // Decrease quantity by 1
        }
    }
    const increaseQtyLongPress = () => {
        console.log('Long pressed on +');
        setQty(qty + 5); // Increase quantity by 5
    }
    const decreaseQtyLongPress = () => {
        if (qty > 5) {
            console.log('Long pressed on -');
            setQty(qty - 5); // Decrease quantity by 5
        }
    }
    const addToCart = () => {
        navigation.navigate('cart', {
            itemTitle: itemTitle,
            price: price * qty,
        });
        console.log('Added',{qty},{itemTitle},'to cart');
    }
    const [additionalDesc, setAdditionalDesc] = useState('');

    useEffect(() => {
        setAdditionalDesc(getAdditionalDescription(itemTitle));
    }, []);

    return (
        <ScrollView>
            <View style={styles.container}>
                <Image
                    source={imageSource}
                    style={styles.image}
                />
                <Text style={styles.itemTitle}>{itemTitle}</Text>
                <Text style={styles.description}>{(description || '') + ' ' + (additionalDesc || '')}</Text>
                <View style={styles.leftAlignContainer}>
                    <Text style={styles.price}>Price: ₹{price * qty}</Text>
                </View>
                <View style={styles.leftAlignContainer}>
                    <Text style={styles.price}>Quantity: {qty}</Text>
                </View>
                <View style={styles.choose_qty}>
                    <Pressable onPress={decreaseQty} onLongPress={decreaseQtyLongPress}><Text style={{fontSize: 50}}>-</Text></Pressable>
                    <Text style={{fontSize: 30}}>{qty}</Text>
                    <Pressable onPress={increaseQty} onLongPress={increaseQtyLongPress}><Text style={{fontSize: 30}}>+</Text></Pressable>
                </View>
                <TouchableNativeFeedback onPress={addToCart}>
                    <Text style={styles.add_to_cart}>Add to Cart</Text>
                </TouchableNativeFeedback>
            </View>
        </ScrollView>
    );
};

export default QuantityScreen;

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        marginBottom: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    description: {
        margin: 20,
        fontSize: 20,
    },
    leftAlignContainer: {
        alignSelf: 'stretch',
        alignItems: 'flex-start',
        marginLeft: 20,
    },
    price: {
        fontSize: 20,
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 20,
    },
    itemTitle: {
        marginTop: 10,
        fontSize: 30,
        fontWeight: "bold",
    },
    choose_qty: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 200,
        margin: 20,
        alignItems: 'center',
        backgroundColor: 'lightgrey',
        padding: 10,
        borderRadius: 10,
    },
    add_to_cart: {
        backgroundColor: 'blue',
        color: 'white',
        padding: 20,
        borderRadius: 10,
        fontSize: 20,
        fontWeight: 'bold',
    },
    pressable: {
        padding: 50,
    },
});