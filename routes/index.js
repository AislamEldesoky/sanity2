var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    var html = indexTemplate([
        {
            title: 'This the first post',
            content: 'First post'
        },
        {
            title: 'This a second post',
            content: 'second post has more insight into the human spirit'
        },
    ]);
    res.set('Content-Type', 'text/html');
    res.send(html);
});

var indexTemplate = function (posts) {
    return `<!DOCTYPE html>
<html>

<head lang='en'>
    <title>My Diary</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.min.css" />
    <link rel="stylesheet" href="css/style.css" />
</head>

<body>
    <header class="header flex-align">
        <h1 class="align-item">Thoughts for my sanity</h1>
    </header>
    <button class="post-load-btn">Load Post</button>
    ${postsTemplate(posts)}
    <script src="js/jquery-2.2.1.min.js"></script>
    <script src="js/main.js"></script>
</body>

</html>`;
}

var postsTemplate = function(posts){
    var postsHtml =  ""
    for (var i=0; i< posts.length;i++) {
        postsHtml += postTemplate(posts[i]);
    }
    return `<section class="post-list">
    ${postsHtml}
</section>`
};

var postTemplate = function(post) {
    return `<article class="post-list-item">
    <h3 class="post-list-item-header">${post.title}</h3>
    <section class="post-list-item-body">
        ${post.content}
    </section>
</article>`;
}

module.exports = router;