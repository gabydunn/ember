import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  redirect(){
    this.transitionTo('rentals')
  }
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('rentals');
});

export default Router;
