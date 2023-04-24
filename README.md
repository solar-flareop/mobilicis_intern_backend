# API Server

This is an API server built with Node.js and Express.js, designed to provide data and functionality for a mobile and web application. The server connects to a MongoDB database using Mongoose for data storage and retrieval.

## Installation

To install the required dependencies, run the following command:

```
npm install
```

## Usage

To start the server, run the following command:

```
npm start
```

Alternatively, to start the server in development mode using Nodemon, run:

```
npm run dev
```

## API Routes

### Store

- `GET /api/v1/store/users`: Get all users stored into database.
- `POST /api/v1/store/users`: Post all users (multiple) into the database.

### Operations

- `GET /api/v1/operations/task1`: Get users with income lower than $5 USD and have a car of brand "BMW" or "Mercedes".
- `GET /api/v1/operations/task2`: Get male users which have phone price greater than 10,000.
- `GET /api/v1/operations/task3`: Get users whose last name starts with "M" and has a quote character length greater than 15 and email includes his/her last name.
- `GET /api/v1/operations/task4`: Get users which have a car of brand "BMW", "Mercedes" or "Audi" and whose email does not include any digit.
- `GET /api/v1/operations/task5`: Show the data of top 10 cities which have the highest number of users and their average income.


## Code Explanation In Short

This is a Node.js REST API for handling HTTP requests related to user data. It uses a userModel imported from a separate module to interact with a MongoDB database.

### addAllUsersController
Inserts a JSON file containing user data into the database.

### getAllUsersController
Returns all user data in the database.

### task1Controller
Returns all users with income less than $5 and a car of brand BMW or Mercedes.

### task2Controller
Returns all male users with phone price greater than $10,000.

### task3Controller
Returns all users whose last name starts with M, have a quote with character length greater than 15, and have an email that includes their last name.

### task4Controller
Returns all users with a car of brand BMW, Mercedes, or Audi, and whose email does not include any digit.

### task5Controller
Returns data on the top 10 cities with the highest number of users, along with their average income. The function first counts the number of users in each city, then calculates the total income and user count for each city, and finally computes the average income for each city and returns the top 10 cities by average income.


## Dependencies

- [Express.js](https://expressjs.com/): Web application framework for Node.js.
- [Mongoose](https://mongoosejs.com/): MongoDB object modeling tool.
- [dotenv](https://github.com/motdotla/dotenv): Loads environment variables from a .env file.
- [cors](https://github.com/expressjs/cors): Middleware for enabling Cross-Origin Resource Sharing.
- [nodemon](https://nodemon.io/): Development tool for automatically restarting the server on code changes.

