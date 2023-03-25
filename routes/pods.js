const express = require("express");
const router = express.Router();

const MibFeed = require('../models/MibFeed.js');
const url = require('url');

router.get("/orig", (req, res) => {
  // TODO: Get the latest XML (from cache or URL)
  let rawXml = mibContents;

  // Parse the XML and manipulate
  let feed = new MibFeed(rawXml);
  let currUrl = url.format({
    protocol: req.protocol,
    host: req.get('host'),
    pathname: req.originalUrl
  });

  feed.changeBasicInfo({
    title: 'The Original',
    description: 'Classic Episodes Only. ',
    link: currUrl, // TODO: do I need this?
    rssLink: currUrl
  });

  // Render the new XML
  let newXml = feed.generateXML();

  res.type('xml').send(newXml);
});

router.get("/dev-static", (req, res) => {
  // Render static xml from a file for testing
  res.type('xml').send(mibContents)
});

module.exports = router;

const { readFileSync } = require('fs');
const mibContents = readFileSync('./test/data/2023-03-18-feed.xml', 'utf8');