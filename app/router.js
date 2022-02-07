import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
  
}

Router.map(function () {
  this.route('radio');
  this.route('library');
  

  this.route('collections', function () {
    this.route('favourites');
    this.route('artists');
    this.route('playlist');
  });

  this.route('discover', function () {
    this.route('top-picks');
    this.route('daily-mix');
    this.route('recent');
  });
  // this.route('', { path: "/home" })
  this.route('home', function () {
    this.route('pop', { path: '/pop/:pop_id' });
    this.route('dance', { path: '/dance/:dance_id' });
    this.route('hits', { path: '/hits/:hits_id' });
  });

  
});
