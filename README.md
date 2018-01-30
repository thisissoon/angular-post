# Angular Post

[![Build Status][travis-badge]][travis]
[![Coverage Status][coveralls-badge]][coveralls]
[![Commitizen friendly][commitizen-badge]][commitizen]

A simple lightweight library to use [Po.st][post] social sharing widgets in [Angular][angular] apps

This project was generated with [Angular CLI][angular-cli] version 1.6.6.

This is a simple library for [Angular][angular], implemented in the [Angular Package Format v5.0](https://docs.google.com/document/d/1CZC2rcpxffTDfRDs6p1cfbmKNLA6x5O-NtkJglDaBVs/edit#heading=h.k0mh3o8u5hx).

## Install

### via NPM

`npm i @thisissoon/angular-post --save`

### via Yarn

`yarn add @thisissoon/angular-post`

`app.module.ts`
```ts
import { PostModule, Post } from '@thisissoon/angular-post';

const postProviders = [
  { provide: Post, useFactory: () => window['postPlatform'] }
];

@NgModule({
  imports: [
    PostModule.forRoot(postProviders)
  ]
})
export class AppModule { }
```

`index.html`

Add the Po.st script to your `index.html` file inside your `<head>` tag as in their instructions
```html
<script type="text/javascript">
  (function () {
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = ('https:' == document.location.protocol ? 'https://s' : 'http://i')
      + '.po.st/static/v4/post-widget.js#publisherKey=<REPLACE_WITH_ACCOUNT_ID>';
    var x = document.getElementsByTagName('script')[0];
    x.parentNode.insertBefore(s, x);
  })();
</script>

```


## Example

A full working example can be found in the [src/app](https://github.com/thisissoon/angular-post/tree/master/src/app) folder.

### `app.component.html`
```html
<sn-post
  [widgetId]="'REPLACE_WITH_WIDGET_ID'"
  [url]="'https://foo.com'"
  [title]="'My Title'"
  [options]="{
    buttons: [
      { id: 'twitter' },
      { id: 'linkedin' },
      { id: 'facebook' }
    ],
    label: false,
    radius: 'square',
    size: 48,
    counter: false,
    layout: 'horizontal',
    jumbo: false,
    padding: false,
    view: 'auto',
    shareNewWindow: true
  }">
</sn-post>
```

## Options

* `widgetId`:(string): can be found in post widget settings
* `url`(string): URL to share
* `title`(string): title of post to share
* `options`(object): options to pass on widget located [here][post-options]


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.


## Running unit tests

Run `ng test` to execute the unit tests via [Karma][karma].

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor][protractor].

## Making Commits

This repo uses [Commitizen CLI][commitizen] and [Conventional Changelog][conventional-changelog] to create commits and generate changelogs. Instead of running `git commit` run `git cz` and follow the prompts. Changelogs will then be generated when creating new releases by running `npm run release`.

## Making Releases

Run `npm run release` to create a new release. This will use [Standard Version][standard-version] to create a new release. [Standard Version][standard-version] will generate / update the changelog based on commits generated using [Commitizen CLI][commitizen], update the version number following semantic versioning rules and then commit and tag the commit for the release. Simply run `git push --follow-tags origin master`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README][angular-cli-readme].


[travis]:https://travis-ci.org/thisissoon/angular-post
[travis-badge]:https://travis-ci.org/thisissoon/angular-post.svg?branch=master
[coveralls]:https://coveralls.io/github/thisissoon/angular-post?branch=master
[coveralls-badge]:https://coveralls.io/repos/github/thisissoon/angular-post/badge.svg?branch=master
[post]:https://www.po.st/
[post-options]:https://post.zendesk.com/hc/en-us/articles/208458026-v4-Global-Configuration-window-pwidget-config-
[angular]:https://angular.io/
[commitizen]:http://commitizen.github.io/cz-cli/
[commitizen-badge]:https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[conventional-changelog]:https://github.com/conventional-changelog/conventional-changelog
[standard-version]:https://github.com/conventional-changelog/standard-version
[Karma]:https://karma-runner.github.io
[Protractor]:http://www.protractortest.org/
[angular-cli]:https://github.com/angular/angular-cli
[angular-cli-readme]:https://github.com/angular/angular-cli/blob/master/README.md
