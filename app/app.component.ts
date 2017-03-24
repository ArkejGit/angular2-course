import { Component } from 'angular2/core';
import { OnInit } from 'angular2/core';
import { NgFor, FORM_DIRECTIVES, FormBuilder, Validator, ControlGroup, Control } from 'angular2/common';
import { Article } from './article';
import { ArticleComponent } from './article.component';
import { ArticleService } from './article.service';

@Component({
	selector: 'articles',
	directives: [ArticleComponent, FORM_DIRECTIVES],
	providers: [ArticleService],
	templateUrl: 'app/app.component.html'
})

export class AppComponent implements OnInit {

	articles: Article[];
	articleForm: ControlGroup;

	title: Control = new Control();
	link: Control = new Control();
	description: Control = new Control();
	image: Control = new Control();

	constructor(private _articleService: ArticleService, fb: FormBuilder) {
		this.articleForm = fb.group({
			'title': this.title,
			'link': this.link,
			'description': this.description,
			'image': this.image,
		})
	}

	getArticles() {
		this._articleService.getArticles()
			.then(articles => this.articles = articles);
	}

	ngOnInit() {
		this.getArticles();
	}

	onSubmit() {
		this.articles.push(new Article(this.title.value, this.link.value, this.description.value, this.image.value));
		this.title.updateValue("");
		this.link.updateValue("");
		this.description.updateValue("");
		this.image.updateValue("");
	}
}