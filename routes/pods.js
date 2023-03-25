const express = require("express");
const router = express.Router();

const MibFeed = require('../models/MibFeed.js');
const url = require('url');

router.get("/flagship", (req, res) => {
  // TODO: Get the latest XML (from cache or URL)
  let rawXml = mibContents;

  // Parse the XML and manipulate
  let feed = new MibFeed(rawXml);
  let currUrl = url.format({
    protocol: req.protocol,
    host: req.get('host'),
    pathname: req.originalUrl
  });
  let logoUrl = url.format({
    protocol: req.protocol,
    host: req.get('host'),
    pathname: '/img/logoFlagship.jpeg'
  });

  feed.changeBasicInfo({
    title: 'Flagship',
    description: 'Flagship pods only.',
    link: currUrl, // TODO: do I need this?
    rssLink: currUrl,
    logoLink: logoUrl
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