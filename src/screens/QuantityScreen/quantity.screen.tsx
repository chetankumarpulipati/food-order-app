import React, {useEffect} from "react";
import {View, Text, StyleSheet, Image} from "react-native";
import { RouteProp } from '@react-navigation/native';

type RootStackParamList = {
    QuantityScreen: { itemTitle: string };
};

type QuantityScreenRouteProp = RouteProp<RootStackParamList, 'QuantityScreen'>;

type Props = {
    route: QuantityScreenRouteProp;
};

const QuantityScreen: React.FC<Props> = ({ route }) => {
    // @ts-ignore
    const { itemTitle, imageSource, description, price, } = route.params;

    return (
        <View style={styles.container}>
            <Text style={{fontSize: 16, color: '#999'}}>{description}</Text>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>₹{price}</Text>
        </View>
    );
};

export default QuantityScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});