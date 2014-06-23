PostsIndexController = RouteController.extend({
  waitOn: function () {
    var limit = parseInt(this.params.postsLimit) || 5;
    Meteor.subscribe('posts_index', {sort: {datePublished: -1}, limit: limit});
  },


  data: function () {
    var limit = parseInt(this.params.postsLimit) || 5;

    return {posts: Posts.find({}, {sort: {datePublish: -1}, limit: limit })
    };
  },

  action: function () {
    this.render();
  }
});
