import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
export default class RatingComponent extends Component {

    @tracked isChecked = false;

    @action
    toggleCheckStatus(event) {
        if (event.target.name) {
            this.isChecked = !this.isChecked;
            this.args.addRules('rating', this.args.index, event, this.isChecked);
        }
    }
}
