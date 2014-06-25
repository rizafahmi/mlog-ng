/*****************************************************************************/
/* PostsIndex: Event Handlers and Helpers */
/*****************************************************************************/
Template.PostsIndex.events({
  /*
   * Example: 
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.PostsIndex.helpers({
});

/*****************************************************************************/
/* PostsIndex: Lifecycle Hooks */
/*****************************************************************************/
Template.PostsIndex.created = function () {
    hljs.initHighlightingOnLoad();
};

Template.PostsIndex.rendered = function () {
};

Template.PostsIndex.destroyed = function () {
};
