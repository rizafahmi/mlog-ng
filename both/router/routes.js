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
  this.route('posts.index', {
    path: '/:postsLimit?'
  });

  this.route('post.submit', {
    path: '/admin/submit',
    layoutTemplate: 'BlankLayout',
  });
  this.route('post.edit', {
    path: '/post/:slug/edit',
    layoutTemplate: 'BlankLayout',
    // data: function() {
    //   return Posts.findOne({slug: this.params.slug})
    // }
  });
  this.route('post.detail', {
    path: '/post/:slug'
  });
  this.route('register', {
    path: '/register',
    layoutTemplate: 'BlankLayout'
  });
});
