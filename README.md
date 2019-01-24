# Fortune Empire Back End Client

## Back End Installation (https://github.com/jooewoo/fortune-empire-front-end-client)
1.  Fork and clone this repository.
1.  Install dependencies with `npm install`.
1.  Run the development server with `npm start`.
1.  Ensure that you have `nodemon` installed by running `npm install -g nodemon`.
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
| DELETE | `/bills/`              | `Bills#destroy`   |

## Development Process | Problem Solving Strategy

### ERD
![capstone](https://media.git.generalassemb.ly/user/17221/files/83ba6100-1b0f-11e9-8d69-60bfb01b251d)

## Future Intentions
1. Front-end repository
2. Back-end repository
3. Front-end deployed
4. Heroku Deployment

## Links

## Technologies Used

## Author
