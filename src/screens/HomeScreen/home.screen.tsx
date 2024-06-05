import React, {useState, useEffect} from 'react';
import {
    ScrollView,
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    RefreshControl,
    Animated,
    Modal,
    Pressable,
} from 'react-native';
import {TouchableOpacity, TouchableNativeFeedback} from "react-native-gesture-handler";
import { Easing } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

// Veg Items
const pizzaImage = require('../../assets/images/pizza.jpg');
const pastaImage = require('../../assets/images/pasta.jpg');
const saladImage = require('../../assets/images/salad.jpg');
const sushiImage = require('../../assets/images/sushi.jpg');
const sandwichImage = require('../../assets/images/sandwich.jpg');
const soupImage = require('../../assets/images/soup.jpg');
const tacoImage = require('../../assets/images/taco.jpg');
const curryImage = require('../../assets/images/curry.jpg');
const dessertImage = require('../../assets/images/dessert.jpg');
const pastaDescription = 'A creamy Alfredo pasta with garlic, mushrooms, and a blend of cheeses. An Italian classic that is rich and comforting.';
const saladDescription = 'A fresh garden salad with mixed greens, tomatoes, cucumbers, and a light vinaigrette. A healthy and refreshing choice.';
const burgerDescription = 'A juicy beef burger with lettuce, tomato, cheese, and a special sauce. Served with a side of crispy fries.';
const sushiDescription = 'An assortment of fresh sushi rolls, including California rolls, spicy tuna, and veggie rolls. Served with soy sauce and wasabi.';
const sandwichDescription = 'A hearty club sandwich with turkey, bacon, lettuce, tomato, and mayo. Perfect for a quick and tasty lunch.';
const soupDescription = 'A warm and comforting bowl of chicken noodle soup, with tender chicken, noodles, and vegetables in a savory broth.';
const tacoDescription = 'Three soft tacos filled with seasoned beef, lettuce, cheese, and salsa. A flavorful and satisfying Mexican dish.';
const curryDescription = 'A rich and spicy chicken curry with tender pieces of chicken in a creamy coconut sauce. Served with steamed rice.';
const dessertDescription = 'A decadent chocolate cake with layers of rich chocolate frosting. A perfect ending to any meal.';
const pizza_description = 'A delightful vegetarian pizza loaded with fresh and flavorful toppings. Perfect for a satisfying and meat-free meal!';
const pizza_price = 10;
const pastaPrice = 12;
const saladPrice = 8;
const burgerPrice = 11;
const sushiPrice = 15;
const sandwichPrice = 9;
const soupPrice = 7;
const tacoPrice = 10;
const curryPrice = 13;
const dessertPrice = 6;


//Non-veg Items
const goan_fish_curry = require('../../assets/images/goan_fish_curry.jpg');
const burgerImage = require('../../assets/images/burger.jpg');
const Chicken_tikka_image: any = require('../../assets/images/chicken_tikka_masala.jpg');
const rogan_josh = require('../../assets/images/rogan_josh.jpg');
const chicken_biryani = require('../../assets/images/chicken_biryani.jpg');
const fish_curry = require('../../assets/images/fish_curry.jpg');
const tandoori_chicken = require('../../assets/images/tandoori_chicken.jpg');
const mutton_korma = require('../../assets/images/mutton_korma.jpg');
const chicken_chettinad = require('../../assets/images/chicken_chettinad.jpg');
const hyderabadi_dum_biryani = require('../../assets/images/hyderabadi_dum_biryani.jpg');
const kerala_fish_fry = require('../../assets/images/kerala_fish_fry.jpg');
const chicken_tikka_masala_description = 'A creamy and flavorful chicken curry made with marinated chicken cooked in a spiced tomato-based sauce.';
const fish_curry_description = 'A spicy and tangy fish curry made with fresh fish fillets, tomatoes, tamarind, and a blend of South Indian spices.';
const chicken_biryani_description = 'A fragrant and flavorful rice dish made with basmati rice, tender pieces of chicken, and a blend of spices and herbs.';
const rogan_josh_description = 'A flavorful and aromatic lamb curry made with tender pieces of lamb cooked in a rich and spicy tomato-based sauce.';
const burger_description = 'A juicy, all-beef patty stacked high with crisp lettuce, vine-ripened tomato, creamy mayo, and tangy pickles on a toasted sesame seed bun.';
const tandoori_chicken_description = 'A classic Indian dish made with marinated chicken cooked in a tandoor oven until tender and charred.';
const mutton_horma_description = 'A rich and creamy mutton curry made with tender pieces of mutton cooked in a spiced yogurt and nut-based sauce.';
const goan_fish_curry_description = 'A spicy and tangy fish curry made with fresh fish fillets, coconut milk, tamarind, and a blend of Goan spices.';
const chicken_chettinad_description = 'A spicy and flavorful chicken curry made with tender pieces of chicken cooked in a spicy and aromatic Chettinad masala.';
const hyderabadi_dum_biryani_description = 'A fragrant and flavorful rice dish made with basmati rice, tender pieces of chicken, and a blend of spices and herbs, cooked in the traditional Hyderabadi dum style.';
const kerala_fish_fry_description = 'A crispy and flavorful fish fry made with fresh fish fillets marinated in a blend of spices and fried until golden brown.';
const burger_price = 5;
const chicken_tikka_masala_price = 14;
const rogan_josh_price = 16;
const chicken_biryani_price = 18;
const tandoori_chicken_price = 22;
const fish_curry_price = 20;
const mutton_korma_price = 24;
const goan_fish_curry_price = 26;
const chicken_chettinad_price = 28;
const hyderabadi_dum_biryani_price = 30;
const kerala_fish_fry_price = 32;


const list_images = [
    {
        id: '1',
        name: 'Pizza',
        pizzaImage,
    },
    {
        id: '2',
        name: 'Pasta',
        pastaImage,
    },
    {
        id: '3',
        name: 'salad',
        saladImage,
    },
    {
        id: '4',
        name: 'Sushi',
        sushiImage,
    },
    {
        id: '5',
        name: 'Sandwich',
        sandwichImage,
    },
    {
        id: '6',
        name: 'Soup',
        soupImage,
    },
    {
        id: '7',
        name: 'Taco',
        tacoImage,
    },
    {
        id: '8',
        name: 'Curry',
        curryImage,
    },
    {
        id: '9',
        name: 'Dessert',
        dessertImage,
    },
    {
        id: '10',
        name: 'Burger',
        burgerImage,
    },
    {
        id: '11',
        name: 'Butter Chicken (Murgh Makhani)',
        Chicken_tikka_image,
    },
    {
        id: '12',
        name: 'Rogan Josh (Lamb Curry)',
        rogan_josh,
    },
    {
        id: '13',
        name: 'Chicken Biryani',
        chicken_biryani,
    },
    {
        id: '14',
        name: 'Fish Curry (Meen Curry)',
        fish_curry,
    },
    {
        id: '15',
        name: 'Tandoori Chicken',
        tandoori_chicken,
    },
    {
        id: '16',
        name: 'Mutton Korma',
        mutton_korma,
    },
    {
        id: '17',
        name: 'Goan Fish Curry',
        goan_fish_curry,
    },
    {
        id: '18',
        name: 'Chicken Chettinad',
        chicken_chettinad,
    },
    {
        id: '19',
        name: 'Hyderabadi Dum Biryani',
        hyderabadi_dum_biryani,
    },
    {
        id: '20',
        name: 'Kerala Fish Fry',
        kerala_fish_fry,
    },
];
const foodItems = [
    {
        id: '1',
        title: 'Pizza',
        description: pizza_description,
        image: pizzaImage,
        price: pizza_price,
        type: 'veg'
    },
    {
        id: '2',
        title: 'Pasta',
        description: pastaDescription,
        image: pastaImage,
        price: pastaPrice,
        type: 'veg'
    },
    {
        id: '3',
        title: 'Salad',
        description: saladDescription,
        image: saladImage,
        price: saladPrice,
        type: 'veg'
    },
    {
        id: '4',
        title: 'Sushi',
        description: sushiDescription,
        image: sushiImage,
        price: sushiPrice,
        type: 'veg'
    },
    {
        id: '5',
        title: 'Sandwich',
        description: sandwichDescription,
        image: sandwichImage,
        price: sandwichPrice,
        type: 'veg'
    },
    {
        id: '6',
        title: 'Soup',
        description: soupDescription,
        image: soupImage,
        price: soupPrice,
        type: 'veg'
    },
    {
        id: '7',
        title: 'Taco',
        description: tacoDescription,
        image: tacoImage,
        price: tacoPrice,
        type: 'veg'
    },
    {
        id: '8',
        title: 'Curry',
        description: curryDescription,
        image: curryImage,
        price: curryPrice,
        type: 'veg'
    },
    {
        id: '9',
        title: 'Dessert',
        description: dessertDescription,
        image: dessertImage,
        price: dessertPrice,
        type: 'veg'
    },
    {
        id: '10',
        title: 'Burger',
        description: burger_description,
        image: burgerImage,
        price: burger_price,
        type: 'non-veg'
    },
    {
        id: '11',
        title: 'Butter Chicken (Murgh Makhani)',
        description: chicken_tikka_masala_description,
        image: Chicken_tikka_image,
        price: chicken_tikka_masala_price,
        type: 'non-veg'
    },
    {
        id: '12',
        title: 'Rogan Josh (Lamb Curry)',
        description: rogan_josh_description,
        image: rogan_josh,
        price: rogan_josh_price,
        type: 'non-veg'
    },
    {
        id: '13',
        title: 'Chicken Biryani',
        description: chicken_biryani_description,
        image: chicken_biryani,
        price: chicken_biryani_price,
        type: 'non-veg'
    },
    {
        id: '14',
        title: 'Fish Curry (Meen Curry)',
        description: fish_curry_description,
        image: fish_curry,
        price: fish_curry_price,
        type: 'non-veg'
    },
    {
        id: '15',
        title: 'Tandoori Chicken',
        description: tandoori_chicken_description,
        image: tandoori_chicken,
        price: tandoori_chicken_price,
        type: 'non-veg'
    },
    {
        id: '16',
        title: 'Mutton Korma',
        description: mutton_horma_description,
        image: mutton_korma,
        price: mutton_korma_price,
        type: 'non-veg'
    },
    {
        id: '17',
        title: 'Goan Fish Curry',
        description: goan_fish_curry_description,
        image: goan_fish_curry,
        price: goan_fish_curry_price,
        type: 'non-veg'
    },
    {
        id: '18',
        title: 'Chicken Chettinad',
        description: chicken_chettinad_description,
        image: chicken_chettinad,
        price: chicken_chettinad_price,
        type: 'non-veg'
    },
    {
        id: '19',
        title: 'Hyderabadi Dum Biryani',
        description: hyderabadi_dum_biryani_description,
        image: hyderabadi_dum_biryani,
        price: hyderabadi_dum_biryani_price,
        type: 'non-veg'
    },
    {
        id: '20',
        title: 'Kerala Fish Fry',
        description: kerala_fish_fry_description,
        image: kerala_fish_fry,
        price: kerala_fish_fry_price,
        type: 'non-veg'
    },
];
const additional_description =[
    {
        id: '1',
        title: 'Pizza',
        additionalDescription: "hi pizza",
    }
]


// @ts-ignore
const HomeScreen = ({navigation}) => {
    const [sortedItems, setSortedItems] = useState([]);
    const [sortText, setSortText] = useState('');
    const [refreshing, setRefreshing] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [animation, setAnimation] = useState(new Animated.Value(-500));
    const [loaded, setLoaded] = useState(false);
    const [selectedOption, setSelectedOption] = useState('all');
    const [modalVisible, setModalVisible] = useState(false);
    const [vegButtonPressed, setVegButtonPressed] = useState(false);
    const [nonVegButtonPressed, setNonVegButtonPressed] = useState(false);
    const [lowToHighButtonPressed, setLowToHighButtonPressed] = useState(false);
    const [highToLowButtonPressed, setHighToLowButtonPressed] = useState(false);
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setSearchText('');
        setSortedItems([]); // Reset the sortedItems state
        setRefreshing(false);
        animation.setValue(-500);
        Animated.timing(animation, {
            toValue: 0,
            duration: 500,
            easing: Easing.out(Easing.quad),
            useNativeDriver: true
        }).start();
        setLoaded(true);
    }, []);
    const renderVegItem = (itemTitle: string, imageSource: any, description: string, price: number) => {
        if ((selectedOption === 'veg' || selectedOption === 'all') && itemTitle.toLowerCase().includes(searchText.toLowerCase())) {
            if (sortedItems.length > 0 && !sortedItems.some(item => item.title === itemTitle)) {
                return null;
            }            return (
                <TouchableNativeFeedback
                    testID={itemTitle}
                    onPress={() => navigation.navigate('QuantityScreen', {itemTitle,imageSource, description, price})}
                    style={styles.design}>
                    <Image
                        source={imageSource}
                        style={{width: 80, height: 80, borderRadius: 5, marginRight: 16}}/>
                    <View style={{flex: 1}}>
                        <Text style={{fontSize: 16, fontWeight: 'bold'}}>{itemTitle}</Text>
                        <Text style={{fontSize: 14, color: '#999'}}>{description}</Text>
                        <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: 5}}>₹{price}</Text>
                        <Text style={styles.vegLabel}>
                            <Image source={require('../../assets/images/veg.png')}
                                   style={{width: 16, height: 16, marginRight: 5}}/>
                            VEG
                        </Text>
                    </View>
                </TouchableNativeFeedback>
            );
        }
    }
    const renderNonVegItem = (itemTitle: string, imageSource: any, description: string, price: number) => {
        if ((selectedOption === 'non-veg' || selectedOption === 'all') && itemTitle.toLowerCase().includes(searchText.toLowerCase())) {
            // Check if the item is in the sortedItems array
            if (sortedItems.length > 0 && !sortedItems.some(item => item.title === itemTitle)) {
                return null; // Don't render the item if it's not in the sortedItems array
            }
            return (
            <TouchableNativeFeedback
                testID={itemTitle}
                onPress={() => navigation.navigate('QuantityScreen', { itemTitle })}
                style={styles.design}>
                <Image
                    source={imageSource}
                    style={{width: 80, height: 80, borderRadius: 5, marginRight: 16}} />
                <View style={{flex: 1}}>
                    <Text style={{fontSize: 16, fontWeight: 'bold'}}>{itemTitle}</Text>
                    <Text style={{fontSize: 14, color: '#999'}}>{description}</Text>
                    <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: 5}}>₹{price}</Text>
                    <Text style={styles.non_vegLabel}>
                        <Image source={require('../../assets/images/non_veg.png')} style={{width: 16, height: 16}} />
                        NON-VEG
                    </Text>
                </View>
            </TouchableNativeFeedback>
        );
        }
    }
    const renderSortOption = () => {
        return (
            <View style={styles.sortContainer}>
                <TouchableOpacity style={styles.sortButton} onPress={() => setModalVisible(true)}>
                    <Text style={styles.sortButtonText}>Sort</Text>
                </TouchableOpacity>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Pressable
                                style={[styles.sortButton, vegButtonPressed ? styles.vegButtonPressed : styles.vegButton]}
                                onPressIn={() => {
                                    setSelectedOption('veg');
                                    setModalVisible(false);
                                    setVegButtonPressed(true);
                                    setSortText('VEG-ITEMS'); // Add this line
                                }}
                                onPressOut={() => setVegButtonPressed(false)}
                            >
                                <Text style={styles.sortButtonText}>Veg</Text>
                            </Pressable>
                            <Pressable
                                style={[styles.sortButton, nonVegButtonPressed ? styles.nonVegButtonPressed : styles.nonVegButton]}
                                onPressIn={() => {setSelectedOption('non-veg'); setModalVisible(false); setNonVegButtonPressed(true);}}
                                onPressOut={() => setNonVegButtonPressed(false)}
                            >
                                <Text style={styles.sortButtonText}>Non-Veg</Text>
                            </Pressable>
                            <Pressable
                                style={[styles.sort_ascending]}
                                onPressIn={() => {
                                    setModalVisible(false);
                                    setSortedItems([]); // Reset the sortedItems state
                                    setSortedItems(sortByPrice(foodItems, 'lowToHigh'));
                                }}
                            >
                                <Text style={styles.sortButtonText}>Price Low to High</Text>
                            </Pressable>
                            <Pressable
                                style={[styles.sort_ascending]}
                                onPressIn={() => {
                                    setModalVisible(false);
                                    setSortedItems([]); // Reset the sortedItems state
                                    setSortedItems(sortByPrice(foodItems, 'highToLow'));
                                }}
                            >
                                <Text style={styles.sortButtonText}>Price High to Low</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    };
    const getUniqueItems = (items) => {
        return items.reduce((unique, item) => {
            return unique.findIndex(uniqueItem => uniqueItem.id === item.id && uniqueItem.title === item.title) !== -1 ? unique : [...unique, item];
        }, []);
    };
    const sortByPrice = (data, order) => {
        const uniqueItems = getUniqueItems(data); // Get unique items before sorting

        const sortedItems = uniqueItems.sort((a, b) => {
            if (order === 'lowToHigh') {
                return a.price - b.price;
            } else if (order === 'highToLow') {
                return b.price - a.price;
            } else {
                return 0;
            }
        });
        return sortedItems || [];
    };


    const handleSearchChange = (text: string) => {
        setSearchText(text);
    };

    useFocusEffect(React.useCallback(() => {
        return () => {
            setVegButtonPressed(false);
            setNonVegButtonPressed(false);
        };
    }, []));
    useFocusEffect(React.useCallback(() => {
        // Reset the searchText state variable when the screen comes into focus
        setSearchText('');
    }, []));
    useEffect(() => {
        if (!modalVisible) {
            setVegButtonPressed(false);
            setNonVegButtonPressed(false);
        }
    }, [modalVisible]);
    useEffect(() => {
        Animated.timing(animation, {
            toValue: 0,
            duration: 500,
            easing: Easing.out(Easing.quad),
            useNativeDriver: true
        }).start();
    }, []);
    useFocusEffect(React.useCallback(() => {
        setSelectedOption('all');
    }, []));
    useFocusEffect(React.useCallback(() => {
        Animated.timing(animation, {
            toValue: 0,
            duration: 500,
            easing: Easing.out(Easing.quad),
            useNativeDriver: true
        }).start();
    }, []));

    return (
        <View style={styles.container}>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image
                    source={require('../../../android/app/src/main/res/mipmap-hdpi/ic_launcher.png')}
                    style={{width: 50, height: 50, borderRadius: 10}}
                />
            </View>
            <View style={styles.searchContainer}>
                <Image
                    source={require('../../assets/images/search_icon.png')}
                    style={styles.iconStyle}
                    tintColor='black'
                />
                <TextInput
                    style={styles.inputStyle}
                    placeholder="Search for items..."
                    onChangeText={handleSearchChange}
                    value={searchText}
                />
            </View>
            <ScrollView style={styles.container}
                        refreshControl={
                            <RefreshControl
                                refreshing={refreshing}
                                onRefresh={onRefresh}
                            />
                        }>
                <Animated.View style={{ transform: [{ translateX: animation }] }}>
                    {renderSortOption()}

                    {sortedItems.map(item => {
                        if (lowToHighButtonPressed) {
                            return renderVegItem(item.title, item.image, item.description, item.price);
                        } else {
                            return renderNonVegItem(item.title, item.image, item.description, item.price);
                        }
                    })}

                    {sortedItems.length === 0 && renderVegItem("Pizza", pizzaImage, pizza_description, pizza_price)}
                    {sortedItems.length === 0 && renderVegItem("Pasta", pastaImage, pastaDescription, pastaPrice)}
                    {sortedItems.length === 0 && renderVegItem("Salad", saladImage, saladDescription, saladPrice)}
                    {sortedItems.length === 0 && renderVegItem("Veg Burger", burgerImage, burgerDescription, burgerPrice)}
                    {sortedItems.length === 0 && renderVegItem("Sushi", sushiImage, sushiDescription, sushiPrice)}
                    {sortedItems.length === 0 && renderVegItem("Sandwich", sandwichImage, sandwichDescription, sandwichPrice)}
                    {sortedItems.length === 0 && renderVegItem("Soup", soupImage, soupDescription, soupPrice)}
                    {sortedItems.length === 0 && renderVegItem("Taco", tacoImage, tacoDescription, tacoPrice)}
                    {sortedItems.length === 0 && renderVegItem("Curry", curryImage, curryDescription, curryPrice)}
                    {sortedItems.length === 0 && renderVegItem("Dessert", dessertImage, dessertDescription, dessertPrice)}

                    {sortedItems.length === 0 && renderNonVegItem("Burger", burgerImage, burger_description, burger_price)}
                    {sortedItems.length === 0 && renderNonVegItem("Butter Chicken (Murgh Makhani)", Chicken_tikka_image, chicken_tikka_masala_description, chicken_tikka_masala_price)}
                    {sortedItems.length === 0 && renderNonVegItem("Rogan Josh (Lamb Curry)", rogan_josh, rogan_josh_description, rogan_josh_price)}
                    {sortedItems.length === 0 &&renderNonVegItem("Chicken Biryani", chicken_biryani, chicken_biryani_description, chicken_biryani_price)}
                    {sortedItems.length === 0 && renderNonVegItem("Fish Curry (Meen Curry)", fish_curry, fish_curry_description, fish_curry_price)}
                    {sortedItems.length === 0 && renderNonVegItem("Tandoori Chicken", tandoori_chicken, tandoori_chicken_description, tandoori_chicken_price)}
                    {sortedItems.length === 0 && renderNonVegItem("Mutton Korma", mutton_korma, mutton_horma_description, mutton_korma_price)}
                    {sortedItems.length === 0 && renderNonVegItem("Goan Fish Curry", goan_fish_curry, goan_fish_curry_description, goan_fish_curry_price)}
                    {sortedItems.length === 0 &&renderNonVegItem("Chicken Chettinad", chicken_chettinad, chicken_chettinad_description, chicken_chettinad_price)}
                    {sortedItems.length === 0 && renderNonVegItem("Hyderabadi Dum Biryani", hyderabadi_dum_biryani, hyderabadi_dum_biryani_description, hyderabadi_dum_biryani_price)}
                    {sortedItems.length === 0 && renderNonVegItem("Kerala Fish Fry", kerala_fish_fry, kerala_fish_fry_description, kerala_fish_fry_price)}

                </Animated.View>
            </ScrollView>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    map: {
        flex: 1,
    },
    design: {
        display: 'flex',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#ddd',
        padding: 10,
    },
    placeholder: {
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        margin: 10,
    },
    vegLabel: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        color: 'green',
    },
    non_vegLabel: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        color: 'red',
    },
    searchContainer: {
        flexDirection: 'row',
        backgroundColor: '#f0f0f0',
        borderRadius: 25,
        padding: 10,
        margin: 10,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'gray',
    },
    iconStyle: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
    inputStyle: {
        flex: 1,
        fontSize: 18,
    },
    sortContainer: {
        padding: 5,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "grey",
        borderRadius: 20,
        padding: 30,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    sortButton: {
        backgroundColor: '#ff6347',
        padding: 10,
        borderRadius: 20,
        width: 100,
        alignItems: 'center',
        margin: 5,
    },
    sortButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    vegButton: {
        backgroundColor: '#ff6347',
        width: 200,
    },
    nonVegButton: {
        backgroundColor: '#ff6347',
        width: 200,
    },
    vegButtonPressed: {
        backgroundColor: '#ff6347',
    },
    nonVegButtonPressed: {
        backgroundColor: '#ff6347',
    },
    sort_ascending:{
        backgroundColor: '#ff6347',
        padding: 10,
        borderRadius: 20,
        width: 200,
        alignItems: 'center',
        margin: 5,
    }
});