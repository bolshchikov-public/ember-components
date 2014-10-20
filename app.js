var App = Ember.Application.create({
  events: 23
});

App.ApplicationController = Ember.Controller.extend({
  hello: function () {
    console.log('hello EmberFest');
  }
})

App.ProgressBarComponent = Ember.Component.extend({
  style: function () {
    return 'width: ' + this.get('progress') + '%';
  }.property('App.events'),
  proxy: function () {
    console.log('passing on');
    this.sendAction('sayHello');
  },
  sayHello: 'hello'
});