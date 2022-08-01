const crawl = require('./index');

(async () => {
    const data = await crawl.get('https://www.youtube.com/c/FernandoUlrich_Oficial');
    const videos = data.getVideos();
    const channelInfo = data.getChannelInfo();
    console.log(channelInfo);
})()