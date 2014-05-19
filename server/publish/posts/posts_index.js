/*****************************************************************************/
/* PostsIndex Publish Functions
/*****************************************************************************/

Meteor.publish('posts_index', function () {
  // you can remove this if you return a cursor
  return Posts.find({},
    {
      sort: { datePublish: -1 }
    });
});

Meteor.publish('post_detail', function (id) {
  return Posts.find({_id: id});
});
