/*****************************************************************************/
/* Login: Event Handlers and Helpers */
/*****************************************************************************/
Template.Login.events({
  'submit form': function (e, t){
    e.preventDefault();

    var email = $(e.target).find("[name=username]").val();
    var password = $(e.target).find("[name=password]").val();

    Meteor.loginWithPassword(email, password, function(err) {
      if (err) {
        console.log("Login error. " + err.reason);
      } else {
        console.log(email+password);
        Router.go('post.submit');
      }

    });
  }
});

Template.Login.helpers({
  'isAdminNotCreated': function () {
    return Meteor.users.find().count() === 1 ? false : true;
  }
});

/*****************************************************************************/
/* Login: Lifecycle Hooks */
/*****************************************************************************/
Template.Login.created = function () {
};

Template.Login.rendered = function () {
};

Template.Login.destroyed = function () {
};
