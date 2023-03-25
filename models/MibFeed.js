const { XMLParser, XMLBuilder } = require("fast-xml-parser");

const xmlParserOptions = {
  ignoreDeclaration: false,
  ignoreAttributes : false,
  cdataPropName: "__cdata",
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

  get title() {
    return this._channel.title;
  }

  set title(newTitle) {
    this._channel.title = newTitle;
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

