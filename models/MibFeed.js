const { XMLParser, XMLBuilder } = require("fast-xml-parser");

const xmlParserOptions = {
  ignoreDeclaration: false,
  ignoreAttributes : false,
  cdataPropName: "__cdata",
  attributeNamePrefix : "__attr_",
  // arrayNodeName: 'item', // could add as a hint but seemingly don't need
  // preserveOrder: true, // could add as a hint but seemingly don't need
  format: true
}

module.exports = class MibFeed {

  constructor(rawXml) {
    const parser = new XMLParser(xmlParserOptions);

    let feedData = parser.parse(rawXml);
    let channel = feedData.rss.channel;

    this._fullFeed = feedData;
    this._channel = feedData.rss.channel;
  }

  set title(newTitle) {
    newTitle = ' - ' + newTitle;

    this._channel.title += newTitle;
    this._channel.image.title += newTitle;
  }

  set description(newDesc) {
    let toAppend = ' ' + newDesc;
    this._channel.description.__cdata += toAppend;
    this._channel['itunes:summary'].__cdata += toAppend;
  }

  set link(newLink) {
    this._channel.link = newLink;
    this._channel.image.link = newLink;
  }

  set rssLink(newLink) {
    this._channel['itunes:new-feed-url'] = newLink;
    this._channel['atom:link'].__attr_href = newLink;
  }

  changeBasicInfo(options) {
    // options.keys: [title, description, link, rssLink]
    this.title = options.title;
    this.description = options.description;
    this.link = options.link;
    this.rssLink = options.rssLink;

    return true;
  }

  generateXML() {
    // TODO(learnJS): I'm not sure if I need to do this;
    // all my writes to _channel should presumably come along for the ride?
    this._fullFeed.rss.channel = this._channel;

    const builder = new XMLBuilder(xmlParserOptions);
    const xmlContent = builder.build(this._fullFeed);

    return xmlContent;
  }

};

