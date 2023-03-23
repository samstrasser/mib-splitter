const { XMLParser } = require("fast-xml-parser");

module.exports = class MibFeed {

  constructor(rawXml) {
    const parser = new XMLParser();
    this.feedData = parser.parse(rawXml);
  }

};
