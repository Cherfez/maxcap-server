# MaxCap.

A booking app for climbing gyms during the COVID-19 period. This app will help manage the max capacity problem climbing gyms may face during the current regulations.

This is the code for the server side. For the client side code, see [https://github.com/Cherfez/maxcap-client](https://github.com/Cherfez/maxcap-client)

## SETUP How to use this template

1. Create a new project based on this template using the `Use this template` button
2. Clone the app
   `git clone git@github.com:YOUR_GITHUB_NAME/YOUR_PROJECT_NAME.git`
3. cd into your project
   `cd YOUR_PROJECT_NAME`
4. install dependencies
   `npm install`
5. Configure your database in `config/config.json`
   The default assumes a postgres database with

- username: postgres
- password: secret

```json
// config/config.json
{
  "development": {
    "username": "postgres",
    "password": "secret",
    "database": "YOUR_PROJECT_NAME_HERE_development",
    "host": "localhost",
    "dialect": "postgres",
    "operatorsAliases": "0"
  }
}
```

6. Create database, run migrations & seed data
   `package.json` contains a script for this
   `npm run initdev`
   Or run the commands seperately

```bash
npx sequelize-cli db:create
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```

7. start server with `nodemon` (recommended for development)
   `npm run dev`
8. or start normally
   `npm start`

## Built With

- Express - To setup server
- Node.js - To keep it going smooth
  Full list:
  To see all the dependencies, see the `package.json` file

## Acknowledgments

Hat tip to all the Codaisseur teachers and other staff at Codaisseur!

## Project status

MaxCap. is currently still being improved. The live version can be seen at: <br/>
[https://maxcap.netlify.app/](https://maxcap.netlify.app/) <br/>
The server is uploaded on Heroku and can be visited at: <br/>
[https://maxcap.herokuapp.com/](https://maxcap.herokuapp.com/)
