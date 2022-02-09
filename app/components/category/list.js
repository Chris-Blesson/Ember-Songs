import Component from '@glimmer/component';

export default class CategoryListComponent extends Component {

    get songs() {
        
        if ('length' in this.args.songList) {
            return this.args.songList;
        }
        else {
            return Object.values(this.args.songList);
        }
    }
}
