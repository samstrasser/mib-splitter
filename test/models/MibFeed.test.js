const MibFeed = require('../../models/MibFeed.js');
const { readFileSync } = require('fs');
const feedContents = readFileSync('./test/data/2023-03-18-feed.xml', 'utf8');

test('sets basic info', () => {
    let feed = new MibFeed(feedContents);
    feed.changeBasicInfo({
        title: 'Title To Append',
        description: 'Desc to append',
        link: 'TODO-HTTP-LINK-URL',
        rssLink: 'TODO-RSS-LINK-URL',
        logoLink: 'TODO-IMG-LINK-URL'
    });

    // TODO(tests): test all the basic info changes?
    // title √
    expect(feed._channel.title).toMatch(/Title To Append/); 
    // image.title

    // description
    // itunes:summary

    // atom:link -- href attr
    // itunes:new-feed-url

    // image.url
    // itunes:image -- href attr
});
