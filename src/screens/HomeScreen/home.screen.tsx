import React, {useState, useEffect} from 'react';
import {
    ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  PermissionsAndroid,
  Button,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TouchableOpacity} from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';


const HomeScreen = () => {
    const navigation = useNavigation();
    // const myImage = require('C:\\Users\\cheta\\Desktop\\food-order-app\\src\\assets\\images\\pizza.jpg');
    const myImage = require('../../assets/images/pizza.jpg');
  const description = 'Description';
  const price = 10;

  return (
    <ScrollView style={styles.container}>
        <TouchableOpacity
            testID="Pizza"
            onPress={() => navigation.navigate('QuantityScreen', { itemTitle: "Pizza" })}
            style={styles.design}>
            <Image
            source={myImage}
            style={{width: 80, height: 80, borderRadius: 5, marginRight: 16}} />
          <View style={{flex: 1}}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>Pizza</Text>
            <Text style={{fontSize: 14, color: '#999'}}>{description}</Text>
            <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: 5}}>${price}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
            testID="Pizza"
            onPress={() => navigation.navigate('QuantityScreen', { itemTitle: "Burger" })}
            style={styles.design}>
            <Image
                source={myImage}
                style={{width: 80, height: 80, borderRadius: 5, marginRight: 16}} />
            <View style={{flex: 1}}>
                <Text style={{fontSize: 16, fontWeight: 'bold'}}>Burger</Text>
                <Text style={{fontSize: 14, color: '#999'}}>{description}</Text>
                <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: 5}}>${price}</Text>
            </View>
        </TouchableOpacity>
      </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    margin: 3,
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
});
