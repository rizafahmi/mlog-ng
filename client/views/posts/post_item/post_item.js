/*****************************************************************************/
/* PostItem: Event Handlers and Helpers */
/*****************************************************************************/
Template.PostItem.events({
  /*
   * Example: 
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.PostItem.helpers({
  /*
   * Example: 
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* PostItem: Lifecycle Hooks */
/*****************************************************************************/
Template.PostItem.created = function () {
};

Template.PostItem.rendered = function () {
  $('pre code').each(function(i, e) {hljs.highlightBlock(e)});
};

Template.PostItem.destroyed = function () {
};
