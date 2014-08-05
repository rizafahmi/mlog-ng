function truncateString( string, num, useWordBoundary ){
  var isLong = string.length > num,
      newString= string.replace( /(^\s)|(\s$)/gi, '' ),
      isOneWord= newString.match(/\s/gi) === null;
  newString = isLong ? newString.substr(0,num-1) : newString;
  newString = ( useWordBoundary && isLong && !isOneWord ) ? newString.substr(0,newString.lastIndexOf(' ')) : newString;
  return isLong ? newString +' ...' : newString;
};

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
      description: marked(truncateString(doc.content, 400, true)),
      link: 'http://www.elixirdose.com/post/' + doc.slug,
      pubDate: doc.datePublish

    });
  });
});
