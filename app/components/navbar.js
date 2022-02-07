import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
export default class NavBarComponent extends Component {

    @tracked activeItem = 'home';
    @tracked currentFocus = '';

    @action
    currentSelected(currentItem) {
        this.activeItem = currentItem;
    }

    @action
    currentFocused(currentFocusedItem,event) {
        
        this.currentFocus = currentFocusedItem;
    }

}
