/*****************************************************************************/
/* CommentSubmit: Event Handlers and Helpers */
/*****************************************************************************/
Template.CommentSubmit.events({
  /*
   * Example: 
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
  'submit form': function (e, tmpl) {
    e.preventDefault();

    var post = Posts.findOne();

    var comment = {
      email: $(e.target).find('[name=email]').val(),
      comment: $(e.target).find('[name=comment]').val(),
      dateCreated: new Date(),
      postid: post._id
    };

    if(Comments.insert(comment))
      $(".form")[0].reset();

  }
});

Template.CommentSubmit.helpers({
  comments: function () {
    var post = Posts.findOne({});

    return Comments.find({postid: post._id});
  }
});

/*****************************************************************************/
/* CommentSubmit: Lifecycle Hooks */
/*****************************************************************************/
Template.CommentSubmit.created = function () {
};

Template.CommentSubmit.rendered = function () {
};

Template.CommentSubmit.destroyed = function () {
};

UI.registerHelper('split', function (email) {
  return email.split('@')[0];
});

UI.registerHelper('formatDate', function (context) {
  return moment(context).fromNow();
});

UI.registerHelper('gravatar', function (email) {
  return Gravatar.imageUrl(email);
});

