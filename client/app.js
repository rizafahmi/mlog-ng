/*****************************************************************************/
/* Client App Namespace  */
/*****************************************************************************/
_.extend(App, {
  track: function (key, meta) {

    meta = meta || {};
    Deps.autorun(function (c) {

      _.extend(meta, {
        path: location.pathname

      });

      mixpanel.track(key, meta);
      c.stop();
    });

  }
});

App.helpers = {
};

_.each(App.helpers, function (helper, key) {
  Handlebars.registerHelper(key, helper);
});

Meteor.startup(function () {
  Session.set("MarkdownPreview", "");
});

Deps.autorun(function () {
  var path = IronLocation.path();
  App.track('Page Views');
});
