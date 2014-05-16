PostsIndexController = RouteController.extend({
  waitOn: function () {
    Meteor.subscribe('posts_index');
  },


  data: function () {
  },

  action: function () {
    this.render();
  }
});
