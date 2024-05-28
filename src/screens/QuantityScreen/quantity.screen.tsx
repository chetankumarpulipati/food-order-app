import React, {useEffect} from "react";
import { View, Text, StyleSheet } from "react-native";
import { RouteProp } from '@react-navigation/native';

type RootStackParamList = {
    QuantityScreen: { itemTitle: string };
};

type QuantityScreenRouteProp = RouteProp<RootStackParamList, 'QuantityScreen'>;

type Props = {
    route: QuantityScreenRouteProp;
};

const QuantityScreen: React.FC<Props> = ({ route }) => {
    useEffect(() => {
        // console.log("Title: ", route.params.itemTitle);
    }, []);

    return (
        <View style={styles.container}>

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