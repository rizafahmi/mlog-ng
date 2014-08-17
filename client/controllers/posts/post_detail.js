PostDetailController = RouteController.extend({
  waitOn: function () {
    return [Meteor.subscribe('post_detail', this.params.slug),
            Meteor.subscribe('comments', {sort: {dateCreated: -1}})];
  },


  data: function () {
    var post = Posts.findOne({slug: this.params.slug}, {sort: {dateCreated: 1}});
    if (post)
      return post;
    else
      this.render("NotFound")
  },

  action: function () {
    this.render();
  }
});
