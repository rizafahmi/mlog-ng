/*****************************************************************************/
/* PostDetail: Event Handlers and Helpers */
/*****************************************************************************/
Template.PostDetail.events({
  /*
   * Example: 
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.PostDetail.helpers({
  /*
   * Example: 
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* PostDetail: Lifecycle Hooks */
/*****************************************************************************/
Template.PostDetail.created = function () {
};

Template.PostDetail.rendered = function () {
  $('pre code').each(function(i, e) {hljs.highlightBlock(e)});
};

Template.PostDetail.destroyed = function () {
};
