import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';



export default class CollectionsFavouritesController extends Controller {
    

    init() {
        super.init(...arguments);
    }
    @tracked songs = [];
    @tracked type = "default";
    @tracked headingText = "No favourites currently available"
    @tracked subHeadingText = ""
    @tracked showSkeleton = false;



    get songList() {
        if (this.type === 'default') {
            this.songs = this.favouriteSongs;
        }
        return this.songs;
    }

    get favourites() {
        return this.songs;
    }

    get renderStatus() {
        return this.showSkeleton;
    }

    get heading() {
        return this.headingText;
    }

    get subHeading() {
        return this.subHeadingText;
    }

    @action
    filterFavourites(event) {
        let favSongs = (this.favouriteSongs);
        this.type = "filter";
        this.songs = [];
        if (event.target.value.length > 0) {
            this.headingText = "No results found for " + `'${event.target.value}'`;
            favSongs.map(favourite => {
                if (favourite.title.includes(event.target.value) && event.target.value.length > 0) {
                    this.songs.push(favourite);
                }
            })
        }
        else {
            this.headingText = "No results found";
            this.songs = favSongs;
        }

        this.subHeadingText = "Please make sure the search word is spelled right!"

    }

    resetData() {
        this.type = "default";
        this.headingText = "No favourites currently available";
        this.subHeadingText = "";
    }


}
