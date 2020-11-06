# Proyecto2

<br>

<img src="./public/images/cuisine.jpg" style="border: 1px solid black">

<br>

## Description

Cooking plataform where you can check recipes from other users or make your own ones. 

In this app you will find recipes from many diferent cultures and diferent flavours.

You can search them by type of cuisine, type food, ...


<br>

## User Stories

- **404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault.
- **500** - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault.
- **homepage** - As a user I want to be able to access the homepage, see what the page is about and access to other areas of it.
- **sign up** - As a user I want to sign up on the web page so that I can personalize my profile and save information for the future.
- **login** - As a user I want to be able to log in on the web page so that I can get back to my account.
- **logout** - As a user I want to be able to log out from the web page so that I can make sure no one will access my account.
- **HallOfFame** - As a user I want to see the recipes and users most rated.
- **Recipes** - As a user I want to see the some recipes examples and be able to find more.
- **Dashboard** - As a user I want be able to create, edit or delete the recipes I created

<br>

## Server Routes (Back-end):


**Method** | **Route**                    | **Description** 
    GET          /                            Renders at home page

    GET          /                            Renders the signup page                                        

    POST         /                            Body
                                                - Name
                                                - Email
                                                - Password
                                              Redirect to recipes page once sign up is done
    
    GET          /                            Renders the login page

    POST         /                            Body
                                                - Email
                                                - Password
                                                - Redirect to recipes page once sign up is done
                                              
    GET          /aboutus                     Renders the about us page

    GET          /recipes                     Renders the recipes page

    POST         /recipes                     User can see recipe details is user is logged in

    GET          /recipes/_id                 Renders the showrecipes page

    GET          /recipes/_id/edit            Renders the edit page

    POST         /recipes/_id/edit            Redirect to recipes page
                                              Body : 
                                                - name
                                                - ingredients
                                                - instructions
                                                - cuisine
                                                - image
                                                - diners
                                                - score
                                                - creator
                                                - typefood

    GET          /dashboard                   Renders the dashboard page

    POST         /dashboard                   Only users logged in can acces into dashboard

    GET          /dashboard/_id/editprofile   Renders the edit profile page

    POST         /dashboard/_id/editprofile   Users logged can modify : 
                                                  - name
                                                  - image

    GET          /createrecipe                Renders the createrecipe page

    POST         /createrecipe                Redirect to recipes webpage
                                                  - name
                                                  - ingredients
                                                  - instructions
                                                  - cuisine
                                                  - image
                                                  - diners
                                                  - score
                                                  - creator
                                                  - typefood
 

## Models

User model

```javascript
 {
     name: {type: String, default: 'Cocinero'},
    email: String,
    password: String,
    image: {type: String, default: 'https://res.cloudinary.com/dmkhzosvq/image/upload/v1604342480/recipes/UserIcon_wsfnk9.png',
    favourites: [],
    score: Number,
  },
  {
    timestamps: true
  }
);

```

Recipes model

```javascript
{
  {
     name: String,
      ingredients: String,
      instructions: String,
      cuisine: {type: String, enum: ["Española", "Japonesa", "Argentina", "Catalana", "Italiana", "Mexicana", "Americana"]},
      image: {type: String, default: 'images.media-allrecipes.com/images/75131.jpg'},
      diners: Number,
      score: Number,
      creator: {type: Schema.Types.ObjectId, ref: 'User'},
      idScorer: Number,
      typefood: {type: String, enum: ["Entrantes", "Primero", "Segundo", "Postre"]},
    });

```

<br>

## MVP

- Create Wildframe of all views/pages in desktop, tablet and mobile
- Identify formularies, renders, conditionals,...
- Identify the flux between all pages/views from nav, links, formularies...
- Create atleast 2 models and link them
- Use HBS with layout, pages and partials
- Routes and methods
- Req.body (POST/PUT)
- Authentication (public vs private)
- Render and redirect pages


## Backlog

- Add to favourites option.
- Add score to recipes.
- Find by top rated recipes.
- Add hall of fame method by recipes and by user.

<br>

## Links


The url to your repository and to your deployed project

[Repository Link on GitHub](https://github.com/GitSkynet/IronCheff)

[Deploy Link on Heroku ](https://ironcheff.herokuapp.com/)

<br>

### Slides

The url to your presentation slides

[Slides Link](https://docs.google.com/presentation/d/1RQLUIY-BDFEMu_HrmuHMXSfhpknRR8VYyPllry5VuN4/edit#slide=id.p)