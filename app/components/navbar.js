import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
export default class NavBarComponent extends Component {

    @tracked activeItem = 'music';
    @tracked currentFocus = '';

    @action
    currentSelected(currentItem) {
        this.activeItem = currentItem;
    }

    @action
    currentFocused(currentFocusedItem) {
        this.currentFocus = currentFocusedItem;
    }

}
