import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class GenreCardComponent extends Component {
    @tracked isScaled = false;


    get scaleStatus() {
        if (this.args.currentFocus === (this.args.type)) {
            this.isScaled = true;
        }
        else {
            this.isScaled = false;
        }
        return this.isScaled;
    }



}
