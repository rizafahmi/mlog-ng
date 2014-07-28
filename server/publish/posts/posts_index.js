/*****************************************************************************/
/* PostsIndex Publish Functions
/*****************************************************************************/

Meteor.publish('posts_index', function (options) {
  // you can remove this if you return a cursor
  return Posts.find({}, options);
});

Meteor.publish('post_detail', function (slug) {
  return Posts.find({slug: slug});
});
