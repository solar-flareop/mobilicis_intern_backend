const userModel = require("../models/userModel");

//Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”.
const task1Controller = async (req, res) => {
  try {
    const result = await userModel.find({
      income: { $lt: "$5" },
      car: { $in: ["BMW", "Mercedes-Benz"] },
    });
    res.status(200).json({ success: true, length: result.length, result });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};

//Male Users which have phone price greater than 10,000.
const task2Controller = async (req, res) => {
  try {
    const users = await userModel.find({});
    const result = users.filter((user) => {
      const phonePrice = parseInt(user.phone_price);
      return user.gender === "Male" && phonePrice > 10000;
    });
    res.status(200).json({ success: true, length: result.length, result });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};

//Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name.
const task3Controller = async (req, res) => {
  try {
    const users = await userModel.find({});
    const result = users.filter((user) => {
      let quoteCopy = user.quote;
      quoteCopy = quoteCopy.replace(/\s/g, "");
      const lastName = user.last_name.toLowerCase();
      return (
        user.last_name.startsWith("M") &&
        quoteCopy.length > 15 &&
        user.email.includes(lastName)
      );
    });
    res.status(200).json({ success: true, length: result.length, result });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};

//Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit.
const task4Controller = async (req, res) => {
  try {
    const result = await userModel.find({
      car: { $in: ["BMW", "Mercedes-Benz", "Audi"] },
      email: { $not: /\d/ },
    });
    res.status(200).json({ success: true, length: result.length, result });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};

//Show the data of top 10 cities which have the highest number of users and their average income.
const task5Controller = async (req, res) => {
  try {
    const users = await userModel.find();

    // top 10 cities by population
    const cities = {};

    users.forEach((user) => {
      cities[user.city] = (cities[user.city] || 0) + 1;
    });

    const resultCities = Object.entries(cities)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
      .map(([city, count], index) => ({
        id: index + 1,
        city,
        count,
      }));

    //top 10 cities by avg income
    const cityData = {};
    for (let user of users) {
      if (cityData[user.city]) {
        cityData[user.city].totalIncome += Number(user.income.slice(1));
        cityData[user.city].userCount++;
      } else {
        cityData[user.city] = {
          totalIncome: Number(user.income.slice(1)),
          userCount: 1,
        };
      }
    }

    //  object into an array and cal the avg income for each city
    const cityDataArray = [];

    for (let city in cityData) {
      cityDataArray.push({
        city: city,
        averageIncome: cityData[city].totalIncome / cityData[city].userCount,
      });
    }

    // Sort the array by avg income in desc
    const resultAvgIncome = cityDataArray
      .sort((a, b) => b.averageIncome - a.averageIncome)
      .slice(0, 10)
      .map((city, index) => ({ ...city, id: index + 1 }));

    res.status(200).json({
      success: true,
      result: { resultCities, resultAvgIncome },
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  task1Controller,
  task2Controller,
  task3Controller,
  task4Controller,
  task5Controller,
};
