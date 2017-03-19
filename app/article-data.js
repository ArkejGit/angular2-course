System.register(['./article'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var article_1;
    var ARTICLES;
    return {
        setters:[
            function (article_1_1) {
                article_1 = article_1_1;
            }],
        execute: function() {
            exports_1("ARTICLES", ARTICLES = [
                new article_1.Article('Bootstrap', 'http://getbootstrap.com/', 'Foundation is a family of responsive front-end frameworks that make it easy to design.', 'http://bower.io/img/bower-logo.png'),
                new article_1.Article('Bootstrap', 'http://getbootstrap.com/', 'Foundation is a family of responsive front-end frameworks that make it easy to design.', 'http://bower.io/img/bower-logo.png'),
                new article_1.Article('Bootstrap', 'http://getbootstrap.com/', 'Foundation is a family of responsive front-end frameworks that make it easy to design.', 'http://bower.io/img/bower-logo.png'),
                new article_1.Article('Bootstrap', 'http://getbootstrap.com/', 'Foundation is a family of responsive front-end frameworks that make it easy to design.', 'http://bower.io/img/bower-logo.png'),
            ]);
        }
    }
});
//# sourceMappingURL=article-data.js.map