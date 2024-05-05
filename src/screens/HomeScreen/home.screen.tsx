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
  const imageUri = 'https://via.placeholder.com/150';
  const title = 'Title';
  const description = 'Description';
  const price = 10;
  
  return (
    <View style={styles.container}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            borderBottomWidth: 1,
            borderColor: '#ddd',
            paddingVertical: 16,
          }}>
          <Image
            source={{uri: imageUri}}
            style={{width: 80, height: 80, borderRadius: 5, marginRight: 16}}
          />
          <View style={{flex: 1}}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>{title}</Text>
            <Text style={{fontSize: 14, color: '#999'}}>{description}</Text>
            <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: 5}}>
              ${price}
            </Text>
          </View>
        </View>
      </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    backgroundColor: '#c7eaf0',
    width: '95%',
    height: '6%',
    margin: 10,
    borderRadius: 10,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  map: {
    flex: 1,
  },
});
