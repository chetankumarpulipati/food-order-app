// src/utils/Permissions.js

import { PermissionsAndroid } from 'react-native';

export const requestStoragePermission = async () => {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            {
                title: "Storage Permission",
                message: "App needs access to your storage to download Photos.",
                buttonNeutral: "Ask Me Later",
                buttonNegative: "Cancel",
                buttonPositive: "OK"
            }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log("You can use the storage");
            return true;
        } else {
            console.log("Storage permission denied");
            return false;
        }
    } catch (err) {
        console.warn(err);
        return false;
    }
};