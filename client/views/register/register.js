/*****************************************************************************/
/* Register: Event Handlers and Helpers */
/*****************************************************************************/
Template.Register.events({
  'submit form': function (e, t) {
    e.preventDefault();
    var username = $(e.target).find("[name=username]").val();
    var password = $(e.target).find("[name=password]").val();
    console.log( username + password );

    Accounts.createUser({email: username, password: password}, function(err) {
      if (err) {
        console.log("Error creating user. " + err.reason);
      } else {
        Router.go('post.submit');
      }
    });
  }
});

Template.Register.helpers({
  /*
   * Example: 
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* Register: Lifecycle Hooks */
/*****************************************************************************/
Template.Register.created = function () {
};

Template.Register.rendered = function () {
};

Template.Register.destroyed = function () {
};
