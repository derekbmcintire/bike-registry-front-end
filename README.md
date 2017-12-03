# WDI21 Boston Project \#2 - Spoke Retriever

## Overview
- Link to Front End:
[Link to Spoke Retriever](https://derekbmcintire.github.io/bike-registry-front-end/)
- Link to API:
[Link to Spoke Retriever API](https://aqueous-brook-70100.herokuapp.com/)
- Link to API GitHub Repo:
[Link to Spoke Retriever API repo](https://github.com/derekbmcintire/bike-registry-back-end)

For my second project at General Assembly I needed to build  a full-stack single page application that allowed a user to sign up, sign in, change password, create a resource, read a resource, update a resource, delete a resource and sign out. I chose to build a site that lets users register their bicycles called Spoke Retriever. My user stories were:

- A user can create an account and log in.
- A user can change their password and log out.
- A user can register many bicycles.
- A user can see their bicycles displayed.
- A user can see a list of all bicycles.
- A user can see a list of all the bicycles they own.
- A user can update or remove a bicycle.

## Technologies Used

- HTML5
- CSS3
- SASS
- Bootstrap
- JavaScript
- jQuery
- Ruby on Rails
- Handlebars
- postgreSQL

My front end is deployed on GitHub and the backend is deployed on Heroku.

## Features/Additions

In addition to the basic requirements, I added some special features.

- A user can search through all of the bicycles in the database and return the ones that match their search.
- A user can see a list of all bicycles in the database, or a list of just their bicycles.

## Wireframe
![Spoke Retriever Wireframe](https://c1.staticflickr.com/5/4538/23906244027_eeca8a2e9e.jpg)

## Entity Relationship Diagram
- V.1
![ERD v.1](https://c1.staticflickr.com/5/4556/38786592582_2cd506a8c3.jpg)
- V.2
![ERD v.2](https://c1.staticflickr.com/5/4561/38786592192_be3f51508a.jpg)

## Updates
I plan to add a join table and allow users to create events with their bicycles.  If their bike is stolen, they can register a stolen event.  If their bicycle is recovered, they can register a recovered event.  I also plan to eventually implement the Google Maps API to show a map of locations where bicycles were stolen.
