/*****************************************************************************/
/* PostSubmit: Event Handlers and Helpers */
/*****************************************************************************/
Template.PostSubmit.events({
  /*
   * Example: 
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
  'submit form': function (e, tmpl) {
    e.preventDefault();
    var post = {
      title: $(e.target).find('input[name=title]').val(),
      content: $(e.target).find('textarea').val(),
      datePublish: new Date()
    }

    var post_id = Posts.insert(post);

    //TODO: Redirect to post_id page
    Router.go('posts.index');

  }
});

Template.PostSubmit.helpers({
  /*
   * Example: 
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* PostSubmit: Lifecycle Hooks */
/*****************************************************************************/
Template.PostSubmit.created = function () {
};

Template.PostSubmit.rendered = function () {
};

Template.PostSubmit.destroyed = function () {
};
