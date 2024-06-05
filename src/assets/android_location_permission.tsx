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
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Geolocation from '@react-native-community/geolocation';
import MapView, {Marker} from 'react-native-maps';
import axios from 'axios';

const checkLocationPermission = async () => {
  try {
    const hasPermission = await AsyncStorage.getItem('locationPermission');
    return hasPermission === 'granted';
  } catch (error) {
    console.error('Error fetching location permission:', error);
    return false;
  }
};
const requestLocationPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Location Permission',
        message: 'Your app needs location access to provide features.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );

    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use location');
      await AsyncStorage.setItem('locationPermission', 'granted');
    } else {
      console.log('Location permission denied');
      await AsyncStorage.setItem('locationPermission', 'denied');
    }
  } catch (error) {
    console.error('Error requesting location permission:', error);
  }
};

const Location = () => {
  const [hasLocationPermission, setHasLocationPermission] = useState(false);
  const navigation = useNavigation();
  const [initialPosition, setInitialPosition] = useState<{
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
  } | null>(null);
  useEffect(() => {
    const checkPermission = async () => {
      const permission = await checkLocationPermission();
      setHasLocationPermission(permission);
    };
    checkPermission();
  }, []);
  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        setInitialPosition({
          latitude,
          longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
      },
      error => Alert.alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        {hasLocationPermission ? (
          <Text>Location permission granted</Text>
        ) : (
          <TouchableOpacity onPress={requestLocationPermission}>
            <Image
              source={require('../../images/location-on.png')}
              style={{width: 30, height: 30}}
            />
          </TouchableOpacity>
        )}
      </View>
      {initialPosition && (
        <MapView style={styles.map} initialRegion={initialPosition}>
          <Marker coordinate={initialPosition} />
        </MapView>
      )}
    </View>
  );
};

export default Location;

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