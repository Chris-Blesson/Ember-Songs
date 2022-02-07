import Component from '@glimmer/component';
import { debounce } from '@ember/runloop';
import { action } from '@ember/object';

export default class SearchBoxComponent extends Component {
    timeoutInterval = 500;
    @action
    debouceInput(event) {
        debounce(this.args.onInputChangeHandler,event,this.timeoutInterval)
    }
}
