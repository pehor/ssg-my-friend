// import fetch from 'isomorphic-unfetch'
const dummyList = require('./dummyData/dummyList')

module.exports = {
  exportTrailingSlash: true,
  exportPathMap: async function() {
    const paths = {
      '/': { page: '/' },
      '/about': { page: '/about' }
    }
    // const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    // const data = await res.json();
    // const shows = data.map(entry => entry.show);
    //
    // shows.forEach(show => {
    //   paths[`/show/${show.id}`] = { page: '/show/[id]', query: { id: show.id } };
    // });
    console.log(`nextconfig1 ${Object.keys(dummyList)}`)
    for (const post of dummyList) {
      paths[`/posts/${post.id}`] = { page: '/posts/[id]', query: { id: post.id, content: post.content } }
    }

    return paths
  }
}
