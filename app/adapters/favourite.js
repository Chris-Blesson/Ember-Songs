import ENV from 'music-player/config/environment';
import FirebaseAdapter from "./firebase";

export default class FavouriteAdapter extends FirebaseAdapter {
    pathForType(){
        return `favourites.json?auth=${ENV.FIREBASE_AUTH}`;
    }
}
