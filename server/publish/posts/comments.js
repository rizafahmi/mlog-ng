/*****************************************************************************/
/* Comments Publish Functions
/*****************************************************************************/

Meteor.publish('comments', function (options) {
  // you can remove this if you return a cursor
  return Comments.find({}, options);
});
