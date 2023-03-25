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

changeBasicInfo() {
    title,
    description,
    link, // keep?
    rssLink,
}

<basic>
    <title>Men In Blazers</title>
    <description>
    <![CDATA[We discuss football. And wear blazers. Usually at the same time. Men in Blazers is driven by the belief that Soccer is America’s Sport of the Future. As it has been since 1972.]]>
    </description>
    <atom:link href="https://rss.art19.com/men-in-blazers" rel="self" type="application/rss+xml"/>
    <link>https://art19.com/shows/men-in-blazers</link>
    <itunes:new-feed-url>https://rss.art19.com/men-in-blazers</itunes:new-feed-url>
    <itunes:summary>
    <![CDATA[We discuss football. And wear blazers. Usually at the same time. Men in Blazers is driven by the belief that Soccer is America’s Sport of the Future. As it has been since 1972.]]>
    </itunes:summary>
    <itunes:image href="https://content.production.cdn.art19.com/images/44/c2/3e/82/44c23e82-4960-4022-add3-394466fac57e/ba67ec86018bc3b367235684ee141bec38a9943c393a17b0b49b3cae20e995efea88cb1dec0843fdf23e55bd4635e249379cd3d7bae6adfb299d744377de3d59.jpeg"/>
    <image>
        <url>https://content.production.cdn.art19.com/images/44/c2/3e/82/44c23e82-4960-4022-add3-394466fac57e/ba67ec86018bc3b367235684ee141bec38a9943c393a17b0b49b3cae20e995efea88cb1dec0843fdf23e55bd4635e249379cd3d7bae6adfb299d744377de3d59.jpeg</url>
        <link>https://art19.com/shows/men-in-blazers</link>
        <title>Men In Blazers</title>
    </image>
</basic>