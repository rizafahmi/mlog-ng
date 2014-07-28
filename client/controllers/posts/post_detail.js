PostDetailController = RouteController.extend({
  waitOn: function () {
    return [Meteor.subscribe('post_detail', this.params.slug),
            Meteor.subscribe('comments', {sort: {dateCreated: -1}})];
  },


  data: function () {
    return Posts.findOne({slug: this.params.slug});
  },

  action: function () {
    this.render();
  }
});
