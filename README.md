# BeatlesProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.1.
-Uses Chrome Browser

Frontend case-study
======================

Preface
----------------------
* Thank you for taking the time to implement this case study.
* If you have questions, please reach out to our hiring manager. She will forward your questions to a developer.
* Please refrain from making this case study or your implementation publicly available, eg. on your GitHub account, or a blog.

Features
----------------------
* Create a microsite that displays music albums, and a detail view for each album
* Consume the iTunes API to fetch a list of albums based on a search term:
  * endpoint: https://itunes.apple.com/search?term=Beatles&entity=album
  * docs at [https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/](https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/)
  * Your layout should be responsive. Lay out items in a grid for desktop (see `itunes-desktop.png`), and in a list for smaller displays (see `itunes-mobile.png`).
  * The list of albums should be sortable.
  * Limit the amount of items loaded initially; load more as needed (infinite scrolling)
* When clicking on an album, its details should be displayed.
  * In the details view, at least cover, title, and track list should be included. Feel free to add additional information as you like.
  * When you are in the details view of an album and hit "refresh" you should see the same details as before.

Prerequisites
----------------------
* Create a local git repository and include your commit history when submitting the case study (`.git` directory)
* Use Angular to implement the site.
* Make sure to prefer framework provided APIs, features, unlesss you have a good reason not to.
* Apply common patterns to implement your solution, eg. use Promises and/or reactive APIs like RxJS, Signals.
* Add a `README`-file to your project, and include these notes as well as your own.
* Please include which browser you have used for development

Please consider
----------------------
* mobile first
* code structure, clean code
* design, transitions, animation, web fonts
* unit tests (where it makes sense)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
