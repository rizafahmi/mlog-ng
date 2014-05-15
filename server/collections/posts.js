/*
 * Add query methods like this:
 *  Posts.findPublic = function () {
 *    return Posts.find({is_public: true});
 *  }
 */

Posts.allow({
  insert: function (userId, doc) {
    return userId;
  },

  update: function (userId, doc, fieldNames, modifier) {
    return doc.user_id === userId;
  },

  remove: function (userId, doc) {
    return doc.user_id === userId;
  }
});

Posts.deny({
  insert: function (userId, doc) {
    return false;
  },

  update: function (userId, doc, fieldNames, modifier) {
    return false;
  },

  remove: function (userId, doc) {
    return false;
  }
});
