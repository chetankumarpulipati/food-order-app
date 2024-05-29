import { Linking, TouchableNativeFeedback, View, Text } from 'react-native';

const AboutScreen = () => {
    const handlePress = () => {
        const url = 'https://www.Google.com'; // Replace with your target URL
        Linking.openURL(url);
    };

    return (
        <View>
            <TouchableNativeFeedback onPress={handlePress}>
                <View style={{ backgroundColor: 'lightblue', padding: 10 }}>
                    <Text>Open Webpage</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    );
};

export default AboutScreen;