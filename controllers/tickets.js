const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
  new: newTicket,
  create,
};

function create(req, res) {
  const t = req.body.
};

function newTicket(req, res) {
  res.render('tickets/new')
};