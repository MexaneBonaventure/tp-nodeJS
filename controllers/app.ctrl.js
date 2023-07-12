const { resolve } = require('path');

exports.homeCtrl = (req, res) => {
  res.render('home.pug');
};

exports.listCtrl = (req, res) => {
  const list = require("../db.json");
  res.render('list.pug', {tasks: list.tasks, users: list.users});
};
