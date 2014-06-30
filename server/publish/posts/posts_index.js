/*****************************************************************************/
/* PostsIndex Publish Functions
/*****************************************************************************/

Meteor.publish('posts_index', function (options) {
  // you can remove this if you return a cursor
console.log(options);
  return Posts.find({}, options);
});

Meteor.publish('post_detail', function (id) {
  return Posts.find({_id: id});
});
