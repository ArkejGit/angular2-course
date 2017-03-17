import { Component } from 'angular2/core';
import { NgFor } from 'angular2/common';
import { Article } from './article';

@Component({
	selector: 'articles',
	templateUrl: 'app/app.component.html'
})

export class AppComponent {

}

var ARTICLES: Article[] = [
	new Article('Bootstrap', 'http://getbootstrap.com/', 'Foundation is a family of responsive front-end frameworks that make it easy to design.', 'http://bower.io/img/bower-logo.png'),
	new Article('Bootstrap', 'http://getbootstrap.com/', 'Foundation is a family of responsive front-end frameworks that make it easy to design.', 'http://bower.io/img/bower-logo.png'),
	new Article('Bootstrap', 'http://getbootstrap.com/', 'Foundation is a family of responsive front-end frameworks that make it easy to design.', 'http://bower.io/img/bower-logo.png'),
];