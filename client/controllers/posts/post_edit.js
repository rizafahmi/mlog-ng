PostEditController = RouteController.extend({
  waitOn: function () {
    Meteor.subscribe('post_detail', this.params._id);
  },

  data: function () {
    return Posts.findOne(this.params._id);
  },

  action: function () {
    this.render();
  }
});
