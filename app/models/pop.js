import Model, { attr } from '@ember-data/model';


export default class PopModel extends Model {
    @attr('string') title;
    @attr({}) images;
    @attr('string') subtitle;
}
