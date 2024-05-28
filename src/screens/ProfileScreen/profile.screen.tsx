import React, { useState } from 'react';
import { Image, Alert, StyleSheet, Text, View, TouchableOpacity, PermissionsAndroid } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

const ProfileScreen = () => {
    const [avatarSource, setAvatarSource] = useState<any>(require('../../assets/images/user_image.png'));

    const requestStoragePermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                {
                    title: "Storage Permission",
                    message: "This app needs access to your storage to download Photos.",
                    buttonNeutral: "Ask Me Later",
                    buttonNegative: "Cancel",
                    buttonPositive: "OK"
                }
            );
            return granted === PermissionsAndroid.RESULTS.GRANTED;
        } catch (err) {
            console.warn(err);
            return false;
        }
    };

    const selectImage = async () => {
        const hasPermission = await requestStoragePermission();
        if (!hasPermission) {
            Alert.alert('Permission required', 'This app needs the storage permission to select an image');
            return;
        }

        launchImageLibrary({ mediaType: 'photo', quality: 1 }, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.errorMessage) {
                console.log('ImagePicker Error: ', response.errorMessage);
            } else if (response.assets && response.assets.length > 0) {
                setAvatarSource({ uri: response.assets[0].uri });
            }
        });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.profile}>Profile</Text>
            <View style={styles.background}>
                <TouchableOpacity onPress={selectImage}>
                    <Image
                        source={avatarSource}
                        style={{ width: 53, height: 53, position: 'absolute', top: 18, left: 20 }}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 5,
    },
    background: {
        height: 89,
        backgroundColor: '#0601B4',
        borderRadius: 5,
        margin: 10,
    },
    profile: {
        fontSize: 30,
        textAlign: 'left',
        margin: 10,
        padding: 10,
        fontWeight: 'bold',
        fontFamily: 'DM Sans',
    },
});

export default ProfileScreen;