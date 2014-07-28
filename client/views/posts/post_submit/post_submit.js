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
    var title = $(e.target).find('input[name=title]').val();
    var post = {
      slug: URLify2(title),
      title: title,
      content: $(e.target).find('textarea').val(),
      datePublish: new Date()
    }

    var post_id = Posts.insert(post);

    //TODO: Redirect to post_id page
    Router.go('posts.index');

  },
  'keydown #content': function (e, t) {
    Session.set("MarkdownPreview", $(e.target).val());
  }
});

Template.PostSubmit.helpers({
  markdownPreview: function () {
    return Session.get("MarkdownPreview");
  }
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
