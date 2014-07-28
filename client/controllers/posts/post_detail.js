PostDetailController = RouteController.extend({
  waitOn: function () {
    return Meteor.subscribe('post_detail', this.params.slug);
  },


  data: function () {
    return Posts.findOne({slug: this.params.slug});
  },

  action: function () {
    this.render();
  }
});
