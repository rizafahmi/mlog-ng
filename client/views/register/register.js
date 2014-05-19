/*****************************************************************************/
/* Register: Event Handlers and Helpers */
/*****************************************************************************/
Template.Register.events({
  'submit form': function (e, t) {
    e.preventDefault();
    Session.set("ErrorMessage", "");
    var username = $(e.target).find("[name=username]").val();
    var password = $(e.target).find("[name=password]").val();

    if(Meteor.users.find().count() === 0){
      Accounts.createUser({email: username, password: password}, function(err) {
        if (err) {
          console.log("Error creating user. " + err.reason);
        } else {
          Router.go('login');
        }
      });
    }else {
      console.log("Admin already created.");
      Session.set("ErrorMessage", "Admin account already created. Please login <a href='" + Meteor.absoluteUrl() + "submit" + "'>here</a>.");
    }
  }
});

Template.Register.helpers({
  'hideMessageClass': function () {
    var errorMessage = Session.get("ErrorMessage");

    if (errorMessage){
      return 'visible';
    }
    return 'hidden';
  },
  'errorMessage': function () {
    return Session.get("ErrorMessage");
  }
});

/*****************************************************************************/
/* Register: Lifecycle Hooks */
/*****************************************************************************/
Template.Register.created = function () {
    Session.set("ErrorMessage", "");
};

Template.Register.rendered = function () {
};

Template.Register.destroyed = function () {
};
