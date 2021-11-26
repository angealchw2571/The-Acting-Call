
# The Acting Call

## Table of contents

- [Introduction](#introduction)
- [Wireframe](#wireframe)
- [Technologies](#technologies)
- [Setup](#setup)
- [Contributors](#contributors)

## Introduction

The goal of this project is to adapt and create a freelance gig listing website for actors/performers in Singapore. We hope this project will serve as a proof of concept and lay the foundations for future work.

## General User - Personal profile/Browsing/Listing casting calls

- Create your personalised profile page to showcase your talents
- Browse through the directory for casting calls and actor/actress database
- Create and post casting call listings
- Create forum threads and reply to specific forum threads

## Wireframe

The wireframe covers the following components:

<img src="./images/wireframe.png">
<img src="./images/castcallapi.png">
<img src="./images/forumapi.png">
<img src="./images/profileapi.png">
<img src="./images/usersapi.png">

## Technologies

Project is created with:

- PostgreSQL
- Django
- ReactJS
- TailwindCSS
- Node.js

Library used in the project:

- [TailwindCSS](https://tailwindcss.com/)
- [axios](https://www.npmjs.com/package/axios)
- [SwiperJS](https://swiperjs.com/)
- [React Router DOM V6](https://reactrouter.com/docs/en/v6/upgrading/v5#upgrade-to-react-router-v6)


## Setup

To run this project, install it locally using npm:

```
$ git clone
$ cd acting-call && npm install
$ npm start
$ npm install
$ npm run dev
```

To run the backend api for project, install it locally using npm:

```
$ git clone
$ cd backend && npm install
$ npm start
$ npm install
$ npm pipenv shell
$ npm pipenv install django
$ npm pipenv python manage.py makemigrations
$ npm pipenv python manage.py migrate
$ npm pipenv python manage.py runserver
$ npm run dev
```

## Contributors

Current:

- Calvin Sim
- Angeal Cheong

