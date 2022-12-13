//hexo.extend.generator.register('random', function (locals) {
//    const config = hexo.config.random || {}
//    const posts = []
//    for (const post of locals.posts.data) {
//        if (post.random !== false) posts.push(post.path)
//    }
//    return {
//        path: config.path || 'zhheo/random.js',
//        data: `var posts=${JSON.stringify(posts)};function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};`
//    }
//})
hexo.extend.filter.register('after_render:html', function (data) {
    const posts = []
    hexo.locals.get('posts').map(function (post) {
        if (post.random !== false) posts.push(post.path)
    })
    data += `<script>var posts=${JSON.stringify(posts)};function toRandomPost(){ window.pjax ? pjax.loadUrl('/'+posts[Math.floor(Math.random()*posts.length)]) : window.open('/'+posts[Math.floor(Math.random()*posts.length)], "_self"); };</script>`
    return data
})