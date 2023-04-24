const {
  task1Controller,
  task2Controller,
  task3Controller,
  task4Controller,
  task5Controller,
} = require("../controllers/operationsController");

const router = require("express").Router();

//Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”.
router.get("/task1", task1Controller);

//Male Users which have phone price greater than 10,000.
router.get("/task2", task2Controller);

//Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name.
router.get("/task3", task3Controller);

//Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit.
router.get("/task4", task4Controller);

//Show the data of top 10 cities which have the highest number of users and their average income.
router.get("/task5", task5Controller);

module.exports = router;
