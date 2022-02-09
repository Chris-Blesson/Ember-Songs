import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

import { later } from '@ember/runloop';
export default class HomeIndexController extends Controller {
    @tracked currentFocus = "2";
    @tracked showSkeleton = false;
    @service router;
    titles = {
        "1": "Pop hits",
        "2": "Dance Beats",
        "3": "Top hits"
    }

    @action
    updateCurrentFocus(item, element) {
        if (item) {
            this.currentFocus = item;
            this.showSkeleton = true;
            later(this, () => {
                this.showSkeleton = false;
            }, 1000);
            element.target.parentNode.parentNode.parentNode.nextElementSibling.scrollIntoView({ behavior: "smooth", block: "end" });
        }
    }

    @action
    setRoute(id) {

        let trackedRoute = "home";
        if (this.currentFocus === '1') {
            trackedRoute += '.pop';
        }
        else if (this.currentFocus === '2') {
            trackedRoute += '.dance';
        }
        else {
            trackedRoute += '.hits';
        }
        this.router.transitionTo(trackedRoute, id);
    }


    get currentGenre() {
        return this.titles[this.currentFocus];
    }

    get renderStatus() {
        return this.showSkeleton;
    }

    get songList() {
        let songData = [];
        if (this.currentFocus === "2") {
            songData = this.danceList;
        }
        else if (this.currentFocus === "1") {
            songData = this.popList;
        }
        else if (this.currentFocus === "3") {
            songData = this.hitsList;
        }
        return songData;
    }


}
