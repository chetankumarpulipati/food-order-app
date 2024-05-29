import React, { useState } from 'react';
import {
    Image,
    Alert,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    TouchableNativeFeedback, TouchableHighlight
} from 'react-native';
import { Linking } from 'react-native';


const ProfileScreen = () => {

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.profile}>Profile</Text>
            {/* Profile Image and Details */}
            <View style={[styles.background, { flexDirection: 'row', alignItems: 'center', padding: 10 }]}>
                <View>
                    <Image
                        source={require('../../assets/images/user_image.png')}
                        style={{ width: 53, height: 53, marginRight: 10, marginLeft:10 }}
                    />
                </View>
                <View style={{ marginRight: 10 }}>
                    <Text style={{ color: '#fff', fontSize: 20, textAlign: 'center' }}>John Doe</Text>
                    <Text style={{ color: '#fff', fontSize: 16, textAlign: 'center' }}>@Itunuoluwa</Text>
                </View>
                <View style={{ flex: 1 }} />
                <TouchableOpacity onPress={() => { /* handle edit action here */ }}>
                    <Image source={require('../../assets/images/pencil_edit.png')} style={{ width: 20, height: 20, marginRight: 20 }} />
                </TouchableOpacity>
            </View>
            <TouchableNativeFeedback style={styles.frame}>
                <View testID="My Account" style={styles.my_account_container}>
                    <Image source={require('../../assets/images/account_circle.png')} style={{ width: 30, height: 30,  marginRight: 10, marginLeft: 10 }} />
                    <View style={{flexDirection: 'column'}}>
                        <Text style={{ fontFamily: 'DM Sans',fontSize: 18, fontWeight: 'bold', marginBottom: 10, color: 'black' }}>My Account</Text>
                        <Text>Make changes to your account</Text>
                    </View>
                    <Image
                        source={require('../../assets/images/chevron_right.png')}
                        style={{ width: 20, height: 20, tintColor: '#000', marginLeft: 'auto', marginRight: 10}}
                    />
                </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback style={styles.frame}>
                <View testID="Touch ID" style={styles.my_account_container}>
                    <Image source={require('../../assets/images/lock.png')} style={{ width: 30, height: 30,  marginRight: 10, marginLeft: 10 }} />
                    <View style={{flexDirection: 'column', justifyContent: 'space-evenly' }}>
                        <Text style={{ fontFamily: 'DM Sans',fontSize: 18, fontWeight: 'bold', marginBottom: 10, color: 'black' }}>Touch ID</Text>
                        <Text>Manage your device security</Text>
                    </View>
                    <Image
                        source={require('../../assets/images/chevron_right.png')}
                        style={{ width: 20, height: 20, tintColor: '#000', marginLeft: 'auto',marginRight: 10}}
                    />
                </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback style={styles.frame}>
                <View testID="Touch ID" style={styles.my_account_container}>
                    <Image source={require('../../assets/images/logout.png')} style={{ width: 30, height: 30,  marginRight: 10, marginLeft: 10 }} />
                    <View style={{flexDirection: 'column', justifyContent: 'space-evenly' }}>
                        <Text style={{ fontFamily: 'DM Sans',fontSize: 18, fontWeight: 'bold', marginBottom: 10, color: 'black' }}>Log out</Text>
                        <Text>Further secure your account for safety</Text>
                    </View>
                    <Image
                        source={require('../../assets/images/chevron_right.png')}
                        style={{ width: 20, height: 20, tintColor: '#000', marginLeft: 'auto', marginRight: 10}}
                    />
                </View>
            </TouchableNativeFeedback>
            <Text style={{fontWeight: 'bold', fontSize: 20, marginLeft: 20}}>More</Text>
            <TouchableNativeFeedback style={styles.frame}>
                <View testID="Help" style={styles.more_container}>
                    <Image source={require('../../assets/images/help.png')} style={{ width: 30, height: 30, marginRight: 10, marginLeft: 10 }} />
                    <View style={{flexDirection: 'column', justifyContent: 'center' }}>
                        <Text style={{ fontFamily: 'DM Sans',fontSize: 18, fontWeight: 'bold', marginBottom: 10, color: 'black', marginTop: 8 }}>Help & Support</Text>
                    </View>
                    <Image
                        source={require('../../assets/images/chevron_right.png')}
                        style={{ width: 20, height: 20, tintColor: '#000', marginLeft: 'auto', marginRight: 10}}
                    />
                </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback onPress={() => {
                    const url = 'https://www.google.com';
                    Linking.openURL(url);
                }} style={styles.frame}>
                <View testID="about" style={styles.more_container}>
                    <Image source={require('../../assets/images/info.png')} style={{ width: 30, height: 30, marginRight: 10, marginLeft: 10 }} />
                    <View style={{flexDirection: 'column', justifyContent: 'center' }}>
                        <Text style={{ fontFamily: 'DM Sans',fontSize: 18, fontWeight: 'bold', marginBottom: 10, color: 'black', marginTop: 8 }}>About App</Text>
                    </View>
                    <Image
                        source={require('../../assets/images/chevron_right.png')}
                        style={{ width: 20, height: 20, tintColor: '#000', marginLeft: 'auto', marginRight: 10}}
                    />
                </View>
            </TouchableNativeFeedback>
            <View style={styles.bottom_icons}>
                <TouchableHighlight
                    onPress={() => {
                    const url = 'https://www.google.com';
                    Linking.openURL(url);
                }}>
                <Image
                    source={require('../../assets/images/icon_instagram.png')}
                    style={{ width: 30, height: 30}}
                />
                </TouchableHighlight>
                <TouchableHighlight
                    onPress={() => {
                        const url = 'https://www.google.com';
                        Linking.openURL(url);
                    }}
                >
                    <Image
                        source={require('../../assets/images/icon_facebook.png')}
                        style={{ width: 25, height: 25, marginLeft: 10}}
                    />
                </TouchableHighlight>
                <TouchableHighlight
                    onPress={() => {
                        const url = 'https://www.google.com';
                        Linking.openURL(url);
                    }}
                >
                    <Image
                    source={require('../../assets/images/icon_x_twitter.png')}
                    style={{ width: 25, height: 25, marginLeft: 10, borderRadius: 10}}
                /></TouchableHighlight>

            </View>
        </ScrollView>
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
        marginTop: 10,
        marginBottom: 30,
    },
    profile: {
        fontSize: 30,
        textAlign: 'left',
        margin: 10,
        padding: 10,
        fontWeight: 'bold',
        fontFamily: 'DM Sans',
        color: '#000',
    },
    frame: {
        borderWidth: 1,
        borderColor: '#FFFFFF',
        margin: 10,
        borderRadius: 5,
        height: 500,
        alignItems: 'center',
    },
    my_account_container: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        alignItems: 'center',
        height: 60,
        margin: 5,
        fontSize: 10,
    },
    more_container: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        height: 60,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottom_icons: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default ProfileScreen;