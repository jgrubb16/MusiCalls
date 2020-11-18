const express = require('express');

const performerController = require('../controllers/performerController.js');

const router = express.Router();

router.get('/', performerController.getPerformer, (req, res) =>
  res.status(200).json(res.locals.performers)
);

router.post('/', performerController.addMessage, (req, res) =>
  res.status(200).json({})
);

module.exports = router;
