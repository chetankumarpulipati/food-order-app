import React, {useState, useEffect} from 'react';
import {
    ScrollView,
    View,
    Text,
    StyleSheet,
    Image,
    PermissionsAndroid,
    Button,
    Alert, RefreshControl, Animated
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
    const myImage = require('../../assets/images/pizza.jpg');
    const description = 'Description';
    const price = 10;

  return (

    <ScrollView style={styles.container}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
    >
        <Animated.View style={{ transform: [{ translateX: animation }] }}>
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
        </Animated.View>
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
    placeholder: {
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        margin: 10,
    },
});
