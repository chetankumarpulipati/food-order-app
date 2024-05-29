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
const burgerImage = require('../../assets/images/burger.jpg');
const burger_description = 'A juicy, all-beef patty stacked high with crisp lettuce, vine-ripened tomato, creamy mayo, and tangy pickles on a toasted sesame seed bun.';
const burger_price = 5;
const Chicken_tikka_image: any = require('../../assets/images/chicken_tikka_masala.jpg');
const chicken_tikka_masala_description = 'A classic Indian dish made with tender pieces of chicken marinated in yogurt and spices, then cooked in a rich tomato-based sauce.';
const chicken_tikka_masala_price = 14;
const rogan_josh = require('../../assets/images/rogan_josh.jpg');
const rogan_josh_description = 'A flavorful and aromatic lamb curry made with tender pieces of lamb cooked in a rich and spicy tomato-based sauce.';
const rogan_josh_price = 16;
const chicken_biryani = require('../../assets/images/chicken_biryani.jpg');
const chicken_biryani_description = 'A fragrant and flavorful rice dish made with basmati rice, tender pieces of chicken, and a blend of spices and herbs.';
const chicken_biryani_price = 18;
const fish_curry = require('../../assets/images/fish_curry.jpg');
const fish_curry_description = 'A spicy and tangy fish curry made with fresh fish fillets, tomatoes, tamarind, and a blend of South Indian spices.';
const fish_curry_price = 20;
const tandoori_chicken = require('../../assets/images/tandoori_chicken.jpg');
const tandoori_chicken_description = 'A classic Indian dish made with marinated chicken cooked in a tandoor oven until tender and charred.';
const tandoori_chicken_price = 22;
const mutton_korma = require('../../assets/images/mutton_korma.jpg');
const mutton_horma_description = 'A rich and creamy mutton curry made with tender pieces of mutton cooked in a spiced yogurt and nut-based sauce.';
const mutton_korma_price = 24;
const goan_fish_curry = require('../../assets/images/goan_fish_curry.jpg');
const goan_fish_curry_description = 'A spicy and tangy fish curry made with fresh fish fillets, coconut milk, tamarind, and a blend of Goan spices.';
const goan_fish_curry_price = 26;
const chicken_chettinad = require('../../assets/images/chicken_chettinad.jpg');
const chicken_chettinad_description = 'A spicy and flavorful chicken curry made with tender pieces of chicken cooked in a spicy and aromatic Chettinad masala.';
const chicken_chettinad_price = 28;
const hyderabadi_dum_biryani = require('../../assets/images/hyderabadi_dum_biryani.jpg');
const hyderabadi_dum_biryani_description = 'A fragrant and flavorful rice dish made with basmati rice, tender pieces of chicken, and a blend of spices and herbs, cooked in the traditional Hyderabadi dum style.';
const hyderabadi_dum_biryani_price = 30;
const kerala_fish_fry = require('../../assets/images/kerala_fish_fry.jpg');
const kerala_fish_fry_description = 'A crispy and flavorful fish fry made with fresh fish fillets marinated in a blend of spices and fried until golden brown.';
const kerala_fish_fry_price = 32;
const items = [
    { title: "Pizza", image: pizzaImage, description: pizza_description, price: pizza_price },
    { title: "Pasta", image: pastaImage, description: pastaDescription, price: pastaPrice },
    { title: "Salad", image: saladImage, description: saladDescription, price: saladPrice },
    { title: "Veg Burger", image: burgerImage, description: burgerDescription, price: burgerPrice },
    { title: "Sushi", image: sushiImage, description: sushiDescription, price: sushiPrice },
    { title: "Sandwich", image: sandwichImage, description: sandwichDescription, price: sandwichPrice },
    { title: "Soup", image: soupImage, description: soupDescription, price: soupPrice },
    { title: "Taco", image: tacoImage, description: tacoDescription, price: tacoPrice },
    { title: "Curry", image: curryImage, description: curryDescription, price: curryPrice },
    { title: "Dessert", image: dessertImage, description: dessertDescription, price: dessertPrice },
    { title: "Burger", image: burgerImage, description: burger_description, price: burger_price },
    { title: "Butter Chicken (Murgh Makhani)", image: Chicken_tikka_image, description: chicken_tikka_masala_description, price: chicken_tikka_masala_price },
    { title: "Rogan Josh (Lamb Curry)", image: rogan_josh, description: rogan_josh_description, price: rogan_josh_price },
    { title: "Chicken Biryani", image: chicken_biryani, description: chicken_biryani_description, price: chicken_biryani_price },
    { title: "Fish Curry (Meen Curry)", image: fish_curry, description: fish_curry_description, price: fish_curry_price },
    { title: "Tandoori Chicken", image: tandoori_chicken, description: tandoori_chicken_description, price: tandoori_chicken_price },
    { title: "Mutton Korma", image: mutton_korma, description: mutton_horma_description, price: mutton_korma_price },
    { title: "Goan Fish Curry", image: goan_fish_curry, description: goan_fish_curry_description, price: goan_fish_curry_price },
    { title: "Chicken Chettinad", image: chicken_chettinad, description: chicken_chettinad_description, price: chicken_chettinad_price },
    { title: "Hyderabadi Dum Biryani", image: hyderabadi_dum_biryani, description: hyderabadi_dum_biryani_description, price: hyderabadi_dum_biryani_price },
    { title: "Kerala Fish Fry", image: kerala_fish_fry, description: kerala_fish_fry_description, price: kerala_fish_fry_price },
];

// @ts-ignore
const HomeScreen = ({navigation}) => {
    const [sortedItems, setSortedItems] = useState([]);
    const sortItemsLowToHigh = () => {
        const sorted = [...items].sort((a, b) => a.price - b.price);
        setSortedItems(sorted);
        setModalVisible(false); // Close the modal
    };
    const sortItemsHighToLow = () => {
        const sorted = [...items].sort((a, b) => b.price - a.price);
        setSortedItems(sorted);
        setModalVisible(false); // Close the modal
    };
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
        const itemsToRender = sortedItems.length > 0 ? sortedItems : items;
        const item = itemsToRender.find(item => item.title === itemTitle);
        if ((selectedOption === 'veg' || selectedOption === 'all') && itemTitle.toLowerCase().includes(searchText.toLowerCase())) {
            return (
                <TouchableNativeFeedback
                    testID={itemTitle}
                    onPress={() => navigation.navigate('QuantityScreen', {itemTitle, description, price})}
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
        const itemsToRender = sortedItems.length > 0 ? sortedItems : items;
        const item = itemsToRender.find(item => item.title === itemTitle);
        if ((selectedOption === 'non-veg' || selectedOption === 'all') && itemTitle.toLowerCase().includes(searchText.toLowerCase())) {            return (
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
                                onPressIn={() => {setSelectedOption('veg'); setModalVisible(false); setVegButtonPressed(true);}}
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
                                onPressIn={() => {setSelectedOption('Price Low to High'); setModalVisible(false);}}
                                onPressOut={() => setLoaded(true)}
                            >
                                <Text style={styles.sortButtonText}>Price Low to High</Text>
                            </Pressable>
                            <Pressable
                                style={[styles.sort_ascending]}
                                onPressIn={() => {setSelectedOption('Price Low to High'); setModalVisible(false);}}
                                onPressOut={() => setLoaded(true)}
                            >
                                <Text style={styles.sortButtonText}>Price Low to High</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
            </View>
        );
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

            {renderVegItem("Pizza", pizzaImage, pizza_description, pizza_price)}
            {renderVegItem("Pasta", pastaImage, pastaDescription, pastaPrice)}
            {renderVegItem("Salad", saladImage, saladDescription, saladPrice)}
            {renderVegItem("Veg Burger", burgerImage, burgerDescription, burgerPrice)}
            {renderVegItem("Sushi", sushiImage, sushiDescription, sushiPrice)}
            {renderVegItem("Sandwich", sandwichImage, sandwichDescription, sandwichPrice)}
            {renderVegItem("Soup", soupImage, soupDescription, soupPrice)}
            {renderVegItem("Taco", tacoImage, tacoDescription, tacoPrice)}
            {renderVegItem("Curry", curryImage, curryDescription, curryPrice)}
            {renderVegItem("Dessert", dessertImage, dessertDescription, dessertPrice)}

            {renderNonVegItem("Burger", burgerImage, burger_description, burger_price)}
            {renderNonVegItem("Butter Chicken (Murgh Makhani)", Chicken_tikka_image, chicken_tikka_masala_description, chicken_tikka_masala_price)}
            {renderNonVegItem("Rogan Josh (Lamb Curry)", rogan_josh, rogan_josh_description, rogan_josh_price)}
            {renderNonVegItem("Chicken Biryani", chicken_biryani, chicken_biryani_description, chicken_biryani_price)}
            {renderNonVegItem("Fish Curry (Meen Curry)", fish_curry, fish_curry_description, fish_curry_price)}
            {renderNonVegItem("Tandoori Chicken", tandoori_chicken, tandoori_chicken_description, tandoori_chicken_price)}
            {renderNonVegItem("Mutton Korma", mutton_korma, mutton_horma_description, mutton_korma_price)}
            {renderNonVegItem("Goan Fish Curry", goan_fish_curry, goan_fish_curry_description, goan_fish_curry_price)}
            {renderNonVegItem("Chicken Chettinad", chicken_chettinad, chicken_chettinad_description, chicken_chettinad_price)}
            {renderNonVegItem("Hyderabadi Dum Biryani", hyderabadi_dum_biryani, hyderabadi_dum_biryani_description, hyderabadi_dum_biryani_price)}
            {renderNonVegItem("Kerala Fish Fry", kerala_fish_fry, kerala_fish_fry_description, kerala_fish_fry_price)}
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
