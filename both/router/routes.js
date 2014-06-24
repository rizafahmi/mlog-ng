/*****************************************************************************/
/* Client and Server Routes */
/*****************************************************************************/
Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound',
  templateNameConverter: 'upperCamelCase',
  routeControllerNameConverter: 'upperCamelCase'
});

var loginHook = function (pause) {
  if (!Meteor.userId()) {
    this.render('Login');
    pause();
  }
};

Router.onBeforeAction(loginHook, {only: ['post.submit']});

Router.map(function () {
  this.route('posts.index', {path: '/'});
  this.route('post.submit', {
    path: '/admin/submit',
    layoutTemplate: 'BlankLayout',
  });
  this.route('post.edit', {
    path: '/post/:_id/edit',
    layoutTemplate: 'BlankLayout',
    data: function() {
      return Posts.findOne(this.params._id)
    }
  });
  this.route('post.detail', {
    path: '/post/:_id'
  });
  this.route('register', {
    path: '/register',
    layoutTemplate: 'BlankLayout'
  });
});
