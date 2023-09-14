# MERN_social_media_APP

##### Version 1.0.0

## Table of contents

- [Description](#Description)
- [Application Features](#Features)
- [Setup](#Requirement)

---

## Description

A responsive mock social media application made from scratch using NodeJS, ExpressJS, MongoDB, ReactJS. This Web Application have good front-end Practices, a proper backend logic and formatted and fragmented which allow scalability. When I started to thinking of making project, i want to make something that force me to learn and apply new libraries and technology and as a result, I have selected this MERN application.

### Inspriation

Always wanted to make an Full Stack application with an attractive layout and with an error free and fully functional backend and web development is something I always wanted to try and build something interesting. I was using this project as a mean to solidify my understanding of MERN stack and really help me prove my skills in it as well.

### Front-End

I have used ReactJS for the front-end development. While working on this project I found that react is a vast thing and currently under development and also understant that i have to keep learning to cop-up with the new updates.

#### React Packages Used

- [Redux](https://redux.js.org/) for State management
- [Material-ui](https://mui.com/) for Animation and layout
- [React-oauth](https://www.npmjs.com/package/react-simple-oauth2-login) for adding goolge Authantication into project
- [Axios](https://www.npmjs.com/package/axios) For making API request to the backend

---

## Features

### Login and Sign-up Feature

This application has google authentication as well as I have implimented sign-in using manual input and storing this data into database and also saving passwords in jwt-encoding and dcrypt. Once user succesfully login or signup, he/she got redirect to home page

### CRUD operation of Post

This appication is able to perform CRUD operation with the posts and it will also show those changes immediately as in this project, after the application have done any CRUP operation, it will immediately make changes to the global state. This include create post, delete post, modify post, like and unlike post.

### Detail page

I have added an detail page logic into this project, so that user can see individual post details and full message.

### Searching Post with text and tags

So in this application, user can search an paticular post by just typing its title or any tag.

### Back-End

For Backend i have used nodeJs and ExpressJS. And i have used MongoDB for database.

### Node

[Node](http://nodejs.org/) is really easy to install & now include [NPM](https://npmjs.org/).
You should be able to run the following command after the installation procedure
below.

    $ node --version
    v0.10.24

    $ npm --version
    1.3.21

#### Node installation on Windows

Just go on [official Node.js website](http://nodejs.org/) & grab the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it.

## Install

For installing the dependency you have to open 2 terminal. one for client and second is for server.

    $ git clone
    $ cd MERN social media APP

    1st terminal:-
    $ cd client
    $ npm install
    $ npm start


    2nd terminal
    $ cd server
    $ npm install
    $ node index.js // this will run the server

### Author

- Avni Goyal <avnigoel113@gmail.com>
