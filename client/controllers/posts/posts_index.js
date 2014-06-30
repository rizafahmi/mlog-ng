PostsIndexController = RouteController.extend({
  increment: 5,
  limit: function() {
    return parseInt(this.params.postsLimit) || this.increment;
  },

  findOptions: function() {
    return { sort: {datePublish: -1}, limit: this.limit() };
  },

  waitOn: function () {
    var limit = parseInt(this.params.postsLimit) || 5;
console.log(this.findOptions());
    Meteor.subscribe('posts_index', this.findOptions());
  },

  posts: function() {
    return Posts.find({}, this.findOptions());
  },

  data: function () {
    var hasMore = this.posts().fetch().length === this.limit();
    var nextPath = this.route.path({postsLimit: this.limit() + this.increment});
    return {
      posts: this.posts(),
      nextPath: hasMore ? nextPath : null
    };

  },

  action: function () {
    this.render();
  }
});
