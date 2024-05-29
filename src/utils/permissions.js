import react from "react";


// Request permission to access photos
const requestPhotosPermission = async () => {
    const status = await Permissions.request('photos');

    if (status === 'granted') {
        // Access photos and videos
        console.log('Photos permission granted');
    } else if (status === 'denied') {
        // Explain why the permission is needed and offer to retry
        console.log('Photos permission denied');
    } else if (status === 'blocked') {
        // Open app settings to allow permission manually
        console.log('Photos permission blocked');
    }
};


export default requestPhotosPermission;