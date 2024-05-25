import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

const ProfileScreen = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.profileImage}
                source={require('../../assets/images/person.png')}
            />
            <Text style={styles.name}>John Doe</Text>
            <Text style={styles.email}>john.doe@example.com</Text>
        </View>
    );
};

const styles = StyleSheet.create({
        container: {
            flex: 1,
            // backgroundColor: '#F5FCFF',
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginTop: 50,
        },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginBottom: 20,
        backgroundColor: 'black',
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    email: {
        fontSize: 18,
        marginBottom: 20,
    },
});

export default ProfileScreen;