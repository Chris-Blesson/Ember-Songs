import Model from '@ember-data/model';
import { attr } from '@ember-data/model';

export default class FavouriteModel extends Model {
    @attr('string') title;
    @attr({}) images;
    @attr('string') subtitle;
}
