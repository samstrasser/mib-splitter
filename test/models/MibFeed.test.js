const MibFeed = require('../../models/MibFeed.js');
const { readFileSync } = require('fs');
const feedContents = readFileSync('./test/data/2023-03-18-feed.xml', 'utf8');

test('gets title from static feed', () => {
    let feed = new MibFeed(feedContents);
    expect(feed.title).toBe('Men In Blazers')
});

test('can change title', () => {
    let feed = new MibFeed(feedContents);
    feed.title = 'new title';
    expect(feed.title).toBe('new title')
});
