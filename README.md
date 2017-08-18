# CASEHAWK

# CaseHawk 401 Final


## Application Summary

'CaseHawk' is a calendar application built specifically for use at legal offices. Users can create, update, view, and delete events on the calendar. The front end is developed in ReactJS and JavaScript and the back end is developed in Node.js and JavaScript. The front end repository is available here. [CaseHawk repository](https://github.com/vagabond0079/casehawk-frontend).

### Technologies

This project is deployed on Heroku.

Dependencies:

  * babel-core
  * babel-jest
  * babel-loader
  * babel-plugin-transform-object-rest-spread
  * babel-preset-es2015
  * babel-preset-react
  * clean-webpack-plugin
  * css-loader
  * dotenv
  * enzyme
  * eslint
  * eslint-plugin-react
  * extract-text-webpack-plugin
  * file-loader
  * font-awesome
  * html-webpack-plugin
  * jest
  * lodash
  * moment
  * node-sass
  * raw-loader
  * react
  * react-big-calendar
  * react-dom
  * react-redux
  * react-router
  * react-router-dom
  * react-test-renderer
  * redux
  * resolve-url-loader
  * sass-loader
  * superagent
  * superagent-mocker
  * uglifyjs-webpack-plugin
  * url-loader
  * validator
  * webpack
  * webpack-dev-server

Dev Dependencies:

  * babel-jest
	* babel-preset-es2015
	* babel-preset-react
	* jest
	* react-test-renderer

## Overview
### Minimum Viable Product
* Create and login to user accounts based on username, password, and email.
* Users can create events under any of the following categories:
  *  Appointment
  *  Court Date
  *  Deadline
  *  Task


* Users can view, edit, and/or delete their existing events by clicking on the event and using the update form.


* Users can manage their calendar through the following views:
  *  Month
  *  Week
  *  Work Week
  *  Day
  *  Agenda

### Future Opportunities
* Add drag and drop feature
* Incorporate miniature month view date picker

## Run examples locally

* Clone this repository
* Clone the backend repository at https://github.com/vagabond0079/casehawk-backend
* Retrieve dependencies: `yarn install`
* Start: `npm run examples`
* Open [localhost:8080/](http://localhost:8080).

## API Endpoints
Deployed endpoint: `https://casehawk-frontend.herokuapp.com`

### Create Account/Sign-in

Users will have the option to create a new account or sign-in on the initial page. Account creations requires a valid e-mail, a username, and a password. Sign-in requires username and password.

###  Create Event
To create an event, the user enters a start and end date and time. There is also an option to mark the event as "all day" The name of the event is entered into the tex box, and the event type is selected from the dropdown menu (options are Appointment, Court Date, Deadline, Task). When the add event button is clicked, the event will populate to the calendar view.

### Update Event
To update an event, the user clicks on the event in the calendar view and makes the necessary changes in the available fields. The event is updated when the update event button is clicked.

### Delete Event
To delete an event, the user clicks on the event in the calendar view and then clicks on the delete event button.
