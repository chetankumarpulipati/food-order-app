import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

const ProfileScreen = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.profileImage}
                source={{uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FCattle&psig=AOvVaw1PlxYKrQdufivnPdNFYtiJ&ust=1716716543715000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPDW18zBqIYDFQAAAAAdAAAAABAE'}}
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
        borderRadius: 50,
        marginBottom: 20,
        backgroundColor: 'gray',
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