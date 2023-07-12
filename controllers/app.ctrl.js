const { resolve } = require('path');

exports.homeCtrl = (req, res) => {
  res.sendFile( resolve('public', 'home.html') );
};

exports.listCtrl = (req, res) => {
  const list = require('../db.json');
  const listUsers = list.users;
  listUsers.forEach(element => console.log(element.name));
  const listTasks = list.tasks;
  // Récupération des livres
  // Vérification de la cnx
  res.sendFile( resolve('public', 'list.html') );
};
