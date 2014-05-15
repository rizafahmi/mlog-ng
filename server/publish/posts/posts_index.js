/*****************************************************************************/
/* PostsIndex Publish Functions
/*****************************************************************************/

Meteor.publish('posts_index', function () {
  // you can remove this if you return a cursor
  this.ready();
});
