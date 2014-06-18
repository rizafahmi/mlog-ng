/*****************************************************************************/
/* PostItem: Event Handlers and Helpers */
/*****************************************************************************/

function truncateString( string, num, useWordBoundary ){
  var isLong = string.length > num,
      newString= string.replace( /(^\s)|(\s$)/gi, '' ),
      isOneWord= newString.match(/\s/gi) === null;
  newString = isLong ? newString.substr(0,num-1) : newString;
  newString = ( useWordBoundary && isLong && !isOneWord ) ? newString.substr(0,newString.lastIndexOf(' ')) : newString;
  return isLong ? newString +' ...' : newString;
};
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
  getContent: function () {
    var post = Posts.findOne(this._id);
    return truncateString(post.content, 400, true);
  }
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
