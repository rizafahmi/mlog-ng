/*****************************************************************************/
/* PostEdit: Event Handlers and Helpers */
/*****************************************************************************/
Template.PostEdit.events({
  'keydown #content': function (e, t) {
    Session.set("MarkdownPreview", $(e.target).val());
  },
  'submit form': function (e, t) {
    e.preventDefault();
    var title = $(e.target).find('input[name=title]').val();
    var content = $(e.target).find('textarea').val();
    Posts.update(this._id, {$set: {title: title, content: content}}, function(error){
      if(error)
        console.log("Whoops, something wrong!", error.reason); 
      //Router.go('posts.index');
    });
  }
});

Template.PostEdit.helpers({
  markdownPreview: function () {
    return Session.get("MarkdownPreview");
  }
});

/*****************************************************************************/
/* PostEdit: Lifecycle Hooks */
/*****************************************************************************/
Template.PostEdit.created = function () {
};

Template.PostEdit.rendered = function () {
};

Template.PostEdit.destroyed = function () {
};
