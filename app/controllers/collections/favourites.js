import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';


export default class CollectionsFavouritesController extends Controller {

    @service router;
    init() {
        super.init(...arguments);
    }
    @tracked songs = [];
    @tracked type = "default";
    @tracked showFilter = false;
    @tracked headingText = "No favourites currently available"
    @tracked subHeadingText = ""
    @tracked showSkeleton = false;
    @tracked filters = {
        'rating': []
    };
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


    finalFavouriteList() {

        this.type = "filter";
        this.songs = [];
        for (let item in this.filters) {
            this.filters[item].map(rule => {
                this.favouriteSongs.map((song) => {
                    if (song[item] === rule) {
                        this.songs.push(song);
                    }
                });
            })
        }
        if (this.songs.length === 0) {
            this.songs = this.favouriteSongs;
        }
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
            this.finalFavouriteList();
        }
        this.subHeadingText = "Please make sure the search word is spelled right!"
    }
    @action
    setRoute(id, type) {
        let trackedRoute = "home";
        trackedRoute += `.${type}`
        this.router.transitionTo(trackedRoute, id);
    }

    @action
    toggleSlider() {
        this.showFilter = !this.showFilter;
    }

    @action
    addRules(type, value, event, status) {

        if (status) {
            this.filters[type] = [...this.filters[type], value];
        }
        else {
            this.filters[type] = this.filters[type].filter(val => val !== value);
        }


        this.finalFavouriteList();
    }
    resetData() {
        this.type = "default";
        this.headingText = "No favourites currently available";
        this.subHeadingText = "";
        this.filters['rating'] = [];
    }

}
