import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { guidFor } from '@ember/object/internals';
export default class NavbarItemComponent extends Component {
    @tracked isActive = false;
    @tracked isFocused = false;

    get activeState() {
        if (this.args.title === this.args.activeItem) {
            this.isActive = true;
        }
        else {
            this.isActive = false;
        }
        return this.isActive;
    }

    get focusState() {
        if ((this.args.title === this.args.currentFocus) && (this.args.title !== this.args.activeItem)) {
            this.isFocused = true;
        }
        else {
            this.isFocused = false;
        }
        return this.isFocused;
    }

    get activeDescendantId() {
         return `tailwind-ui-listbox-id-${guidFor(this.args.title)}`;
    }

}
