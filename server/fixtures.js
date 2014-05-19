if ( Posts.find().count() === 0 ) {
  var post = {
    title: "Hello Meteor World!",
    content: "**Congratulation** for your blog. This is dummy content. You should create an account and start blogging. Then remove this content. For your own good! Start create new content by visit " + Meteor.absoluteUrl() + "submit",
    datePublish: new Date()
  }

  Posts.insert(post);
}
