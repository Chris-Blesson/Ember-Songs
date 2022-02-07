import Model, { attr } from '@ember-data/model';

export default class HitModel extends Model {
    @attr('string') title;
    @attr({}) images;
    @attr('string') subtitle;
}
