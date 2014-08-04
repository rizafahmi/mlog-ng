RssFeed.publish('feed', function ( query ) {
  var self = this;

  self.setValue('title', self.cdata('My Article'));
  self.setValue('description', self.cdata('ElixirDose live feed'));
  self.setValue('link', 'http://www.elixirdose.com');
  self.setValue('lastBuildDate', new Date());
  self.setValue('pubDate', new Date());
  self.setValue('ttl', 1);

  Posts.find({}, {sort: {datePublish: -1}}).forEach(function(doc) {
    self.addItem({
      title: doc.title,
      description: marked(doc.content),
      link: 'http://www.elixirdose.com/post/' + doc.slug,
      pubDate: doc.datePublish

    });
  });
});
