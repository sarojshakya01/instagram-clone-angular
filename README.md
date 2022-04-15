## About the project Instagram

This project has basic structure of the original [Instagram](https://www.instagram.com/). All the css design has been copied from Original [Instagram](https://www.instagram.com/). But the API data format has different structure than original [Instagram](https://www.instagram.com/). The template database used in this project can be found at data folder of the project root directory. The original data format caan be found inside the apidataformat folder inside data folder. The React Components in this project are also not similar to the original [Instagram](https://www.instagram.com/).

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.7.
## How to run the projects?

1. Clone or Download zip and extract the project.
2. Host a mongodb server (either in cloud or in local machine)
3. Add database "Instagram" in your mongodb server
4. Add collections "user" and "post" in "Instagram" database
5. import respective data from data folder of project root directory (user.json and posts.json) or you can add your own data according to the schema of those json files.
6. You can add your own image files in public/image/userdata folder of root directory
7. Go to the project directory and make a .env file from .sample.env and place your values for your  server, also change the environment variable in src/environments/environment.ts file as per your need for you FE app
8. run `npm install`
9. run `node server.js` command from commant prompt (You should have already installed NodeJS in your machine))
10. run `npm start` command in another instance of command prompt"


You can like the post from both photo and like icon, navigate to next photo, add comment, delete comment(only on your post and your comment on other's post), like comment etc.

Enjoy!

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
