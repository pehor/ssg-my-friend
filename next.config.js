const withSass = require('@zeit/next-sass')
const withFonts = require('next-fonts')

const dummyList = require('./dummyData/dummyList')

module.exports = withFonts(withSass({
  exportTrailingSlash: true,
  exportPathMap: async function (defaultPathMap, { dev }) {
    // This causes skipping overriding the paths, which breaks dev mode
    // This way we can test statically exported paths in dev mode.
    if (dev) return {}

    const paths = {
      '/': { page: '/' },
      '/about': { page: '/about' }
    }

    for (const post of dummyList) {
      paths[`/posts/${post.id}`] = { page: '/posts/[id]', query: { id: post.id } }
    }
    // Option: if using getInitialProps, we can populate them at export time with this:
    // for (const post of dummyList) {
    //   paths[`/posts/${post.id}`] = { page: '/posts/[id]', query: { id: post.id, content: post.content } }
    // }

    console.log('exported paths')
    console.log(paths)

    return paths
  },
  cssModules: true
}))
