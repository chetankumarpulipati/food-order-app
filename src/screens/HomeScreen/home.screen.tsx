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
    Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TouchableOpacity} from "react-native-gesture-handler";
import { Easing } from 'react-native';


// @ts-ignore
const HomeScreen = ({navigation}) => {
    const [refreshing, setRefreshing] = useState(false);
    const [animation, setAnimation] = useState(new Animated.Value(-500));
    const [loaded, setLoaded] = useState(false);

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
    useEffect(() => {
        Animated.timing(animation, {
            toValue: 0,
            duration: 500,
            easing: Easing.out(Easing.quad),
            useNativeDriver: true
        }).start();
    }, []);
    const pizzaImage = require('../../assets/images/pizza.jpg');
    const burgerImage = require('../../assets/images/burger.jpg');
    const pizza_description = 'A delightful vegetarian pizza loaded with fresh and flavorful toppings. Perfect for a satisfying and meat-free meal!';
    const burger_description = 'A juicy, all-beef patty stacked high with crisp lettuce, vine-ripened tomato, creamy mayo, and tangy pickles on a toasted sesame seed bun.';
    const pizza_price = 10;
    const burger_price = 5;

    const renderVegItem = (itemTitle, imageSource, description, price) => {
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
                    <Text style={styles.vegLabel}>
                        <Image source={require('../../assets/images/veg.png')} style={{width: 16, height: 16, marginRight: 5}} />
                        VEG
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }

    const renderNonVegItem = (itemTitle, imageSource, description, price) => {
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

  return (
      <View style={styles.container}>
          <View style={styles.searchContainer}>
              <Image
                  source={require('../../assets/images/search_icon.png')}
                  style={styles.iconStyle}
                  tintColor='black' // Add this line to make the icon darker
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
            {renderVegItem("Pizza", pizzaImage, pizza_description, pizza_price)}
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
});
