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
    PermissionsAndroid,
    Button,
    Modal,
    Alert,
    Pressable,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TouchableOpacity} from "react-native-gesture-handler";
import { Easing } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';



// @ts-ignore
const HomeScreen = ({navigation}) => {
    const [refreshing, setRefreshing] = useState(false);
    const [animation, setAnimation] = useState(new Animated.Value(-500));
    const [loaded, setLoaded] = useState(false);
    const [selectedOption, setSelectedOption] = useState('all');
    const [modalVisible, setModalVisible] = useState(false);
    const [vegButtonPressed, setVegButtonPressed] = useState(false);
    const [nonVegButtonPressed, setNonVegButtonPressed] = useState(false);
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
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
        if (selectedOption === 'veg' || selectedOption === 'all') {
            return (
                <TouchableOpacity
                    testID={itemTitle}
                    onPress={() => navigation.navigate('QuantityScreen', {itemTitle})}
                    style={styles.design}>
                    <Image
                        source={imageSource}
                        style={{width: 80, height: 80, borderRadius: 5, marginRight: 16}}/>
                    <View style={{flex: 1}}>
                        <Text style={{fontSize: 16, fontWeight: 'bold'}}>{itemTitle}</Text>
                        <Text style={{fontSize: 14, color: '#999'}}>{description}</Text>
                        <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: 5}}>${price}</Text>
                        <Text style={styles.vegLabel}>
                            <Image source={require('../../assets/images/veg.png')}
                                   style={{width: 16, height: 16, marginRight: 5}}/>
                            VEG
                        </Text>
                    </View>
                </TouchableOpacity>
            );
        }
    }
    const renderNonVegItem = (itemTitle: string, imageSource: any, description: string, price: number) => {
        if (selectedOption === 'non-veg' || selectedOption === 'all') {
            return (
                <TouchableOpacity
                    testID={itemTitle}
                    onPress={() => navigation.navigate('QuantityScreen', { itemTitle })}
                    style={styles.design}>
                    <Image
                        source={imageSource}
                        style={{width: 80, height: 80, borderRadius: 5, marginRight: 16}} />
                    <View style={{flex: 1}}>
                        <Text style={{fontSize: 16, fontWeight: 'bold'}}>{itemTitle}</Text>
                        <Text style={{fontSize: 14, color: '#999'}}>{description}</Text>
                        <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: 5}}>${price}</Text>
                        <Text style={styles.non_vegLabel}>
                            <Image source={require('../../assets/images/non_veg.png')} style={{width: 16, height: 16}} />
                            NON-VEG
                        </Text>
                    </View>
                </TouchableOpacity>
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
                        </View>
                    </View>
                </Modal>
            </View>
        );
    };
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

    useFocusEffect(React.useCallback(() => {
            return () => {
                setVegButtonPressed(false);
                setNonVegButtonPressed(false);
            };
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

  return (
      <View style={styles.container}>
          <View style={styles.searchContainer}>
              <Image
                  source={require('../../assets/images/search_icon.png')}
                  style={styles.iconStyle}
                  tintColor='black'
              />
              <TextInput
                  style={styles.inputStyle}
                  placeholder="Search for items..."
              />
          </View>
    <ScrollView style={styles.container}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
    >
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
        padding: 10,
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
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
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
        backgroundColor: '#32CD32',
    },
    nonVegButton: {
        backgroundColor: '#FF4500',
    },
    vegButtonPressed: {
        backgroundColor: '#228B22',
    },
    nonVegButtonPressed: {
        backgroundColor: '#8B0000',
    },
});
