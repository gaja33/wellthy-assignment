# WellthyAssignment

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.7. In order for this project to run please follow the prerequisites.
Wellthy Assignment is a responsive web page consists of landing page/login page and home. Login page has two input field username and mobile number. User has to provide username and mobile number, after successfull validation user will be redirected to home page where the website of wellthy will be loaded. and in addition email will be triggered to (wellthy.assignment@gmail.com).

#### User name has to satisfy certain validations
* User name must contain atleast 6 characters and max 30 not beyond.
* Alphanumeric and optional underscore.
* Should start with character only.

#### Mobile number validation
* Should be 10 digits only.

# Features
* On successfull validation user will be redirected to home page and email will be triggered.

# Additional Features
## Auth Gaurd
* User will not be able to go to home page unless logged in. 
* Once user log's in, localstorage is maintained. When user clicks back from home page, user will not be able to access home page again in order to mimic the auth gaurd behaviour.

## Prerequisites
* Node JS and NPM
* Angular CLI

## How to install Node
Go to the following link (https://nodejs.org/en/) download the executables that suits your platform OS. Follow the on screen steps to install Node.
NPM comes along with Node

## How to Install the Angular CLI
You use the Angular CLI to create projects, generate application and library code, and perform a variety of ongoing development tasks such as testing, bundling, and deployment.

To install the Angular CLI, open a terminal window and run the following command:
```javascript
npm install -g @angular/cli
```

## Development server

Clone the project or downlaod in a directory and Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Built With
* Angular
* Bootstrap
* Font Awesome Icons
* SMTP.js and Elastic Email
