# Fortune Empire Back End API
This is a full stack capstone project built with React and Express. Fortune Empire keeps track of your personal finances, and to display your personal spending habits. The ultimate goal for this app is to help a user visualize their spending habits, and better manage their finances, while increasing their financial literacy. As a person who struggles to manage his own finances, I had the inspiration to build this app to help myself and others towards financial literacy.

## Back End Installation (https://github.com/jooewoo/fortune-empire-front-end-client)
1.  Fork and clone this repository.
1.  Install dependencies with `npm install`.
1.  Ensure that you have `nodemon` installed by running `npm install -g nodemon`.
1.  Run the development server with `npm start`.
1.  Create a new branch, `training`, for your work.
1.  Checkout to the `training` branch.
1.  From the root of your repository, run the following commands. They will set a SECRET_KEY for development and testing.
```sh
 echo SECRET_KEY_BASE_TEST=$(openssl rand -base64 66 | tr -d '\n') >> .env
 echo SECRET_KEY_BASE_DEVELOPMENT=$(openssl rand -base64 66 | tr -d '\n') >> .env
 ```
1.  Ensure the API is functioning properly by running `npm run server`.

## API
Use this as the basis for your own API documentation. Add a new third-level
heading for your custom entities, and follow the pattern provided for the
built-in user authentication documentation.

Scripts are included in [`scripts`](scripts) to test built-in actions. Add your
own scripts to test your custom API.

## Tasks
Instead of `grunt`, this repository uses `npm` as a task runner. This is more
conventional for modern Express apps, and it's handy because we'll definitely
use `npm` anyway. These are the commands available:

| Command                | Effect                                                                                                      |
|------------------------|-------------------------------------------------------------------------------------------------------------|
| `npm run server`       | Starts a development server with `nodemon` that automatically refreshes when you change something.                                                                                         |
| `npm test`             | Runs automated tests.                                                                                       |
| `npm run debug-server` | Starts the server in debug mode, which will print lots of extra info about what's happening inside the app. |

### Authentication

| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| POST   | `/sign-up`             | `users#signup`    |
| POST   | `/sign-in`             | `users#signin`    |
| PATCH  | `/change-password/`    | `users#changepw`  |
| DELETE | `/sign-out/`           | `users#signout`   |

### Bills
| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| POST   | `/bills`               | `Bills#create`    |
| GET    | `/bills`               | `Bills#index`     |
| GET    | `/bills/:id`           | `Bills#index`     |
| PATCH  | `/bills/:id`           | `Bills#update`    |
| DELETE | `/bills/:id`           | `Bills#destroy`   |

## Development Process | Problem Solving Strategy
Before I even began coding, I decided to narrow down what I specifically wnat for my application. Therefore, I drafted my user stories, database structure, the time allocated to build this project, and the steps I needed to get this into production.

My first step was to divided my user stories into four aspects: What information does my user need, what does my model for my server need, what RESTful APIs does the user need, and what design is best to accurately display to the user. Aftewards, I worked in concert with an instructor to hash out my Entity Relationship Diagram.

Once I had a finalized plan, I began working on the back end API, by setting up the Bills model and routes. To check if I successfully my work, I added curl scripts in order to see the information was correctly being added.

Finally, I progressed to working on the front end client to try and achieve minimum viable product. Once I confirmed the application was functional, I began working on the design.

### ERD
![capstone](https://media.git.generalassemb.ly/user/17221/files/83ba6100-1b0f-11e9-8d69-60bfb01b251d)

## Future Intentions
1. Add a model for Profile, and relate it to the user and bills model.
2. Store information of a user's income and disposable income in the Profile Model. 

## Links
* [Front-End Repository](https://github.com/jooewoo/fortune-empire-front-end-client)
* [Back-End Repository](https://github.com/jooewoo/fortune-empire-back-end)
* [Front-End Deployed Site](https://jooewoo.github.io/fortune-empire-front-end-client/)
* [Heroku Deployment](https://arcane-atoll-72181.herokuapp.com/)

## Technologies Used
* JavaScript
* Node.js
* MongoDB
* Mongoose
* Express
* Heroku
* mlabs
* nodemon

## Author
Made by Joseph Woo
