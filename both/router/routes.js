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

Router.map(function () {
  this.route('posts.index', {path: '/'});
  this.route('post.submit', {
    path: '/submit',
    layoutTemplate: 'BlankLayout'
  });
  this.route('post.detail', {
    path: '/post/:_id'
  });
});
