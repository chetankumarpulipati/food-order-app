import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

const ProfileScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.profile}>Profile</Text>
            <ImageBackground
                style={styles.background}
            />
        </View>

    );
};

const styles = StyleSheet.create({
    container: {

    },
    background: {
        width: '100%',
        height: 50,
        backgroundColor: '#0601B4',
        borderRadius: 5,
        margin: 10,
    },
    profile: {
        fontSize: 30,
        textAlign: 'left',
        margin: 10,
        padding: 10,
    }
});

export default ProfileScreen;
