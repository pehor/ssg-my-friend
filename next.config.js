// import fetch from 'isomorphic-unfetch'
const withSass = require('@zeit/next-sass')
const dummyList = require('./dummyData/dummyList')

module.exports = withSass({
  exportTrailingSlash: true,
  exportPathMap: async function () {
    const paths = {
      '/': { page: '/' },
      '/about': { page: '/about' }
    }
    // const res = await fetch('[some data source]');
    // const data = await res.json();
    // const posts = data.map(entry => entry.post);
    //
    // posts.forEach(post => {
    //   paths[`/posts/${post.id}`] = { page: '/post/[id]', query: { id: post.id } }
    // });

    for (const post of dummyList) {
      paths[`/posts/${post.id}`] = { page: '/posts/[id]', query: { id: post.id } }
    }
    // Option: if using getInitialProps, we can populate them at export time with this:
    // for (const post of dummyList) {
    //   paths[`/posts/${post.id}`] = { page: '/posts/[id]', query: { id: post.id, content: post.content } }
    // }

    return paths
  },
  cssModules: true
})
