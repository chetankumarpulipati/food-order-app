import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  PermissionsAndroid,
  Button,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = () => {
  const myImage = require('C:\\Users\\cheta\\Desktop\\food-order-app\\src\\assets\\images\\pizza.jpg');
  const title = 'Title';
  const description = 'Description';
  const price = 10;
  
  return (
    <View style={styles.container}>
        <View style={styles.design}>
          <Image
            source={myImage}
            style={{width: 80, height: 80, borderRadius: 5, marginRight: 16}} />
          <View style={{flex: 1}}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>{title}</Text>
            <Text style={{fontSize: 14, color: '#999'}}>{description}</Text>
            <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: 5}}>${price}</Text>
          </View>
        </View>
        <View style={styles.design}>
        <Image
            source={myImage}
            style={{width: 80, height: 80, borderRadius: 5, marginRight: 16}} />
        <View style={{flex: 1}}>
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>{title}</Text>
          <Text style={{fontSize: 14, color: '#999'}}>{description}</Text>
          <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: 5}}>${price}</Text>
        </View>
      </View>
      </View>
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
