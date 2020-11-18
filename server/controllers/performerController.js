const db = require('../models/performerModel');

const performerController = {};

//middleware

performerController.getPerformer = async (req, res, next) => {
  // const char = `SELECT * FROM people`;
  const performer = `SELECT * FROM performers`;
  try {
    const performerList = await db.query(performer);
    console.log('PerformerList: ', performerList.rows);
    res.locals.performers = performerList.rows;
    return next();
  } catch (e) {
    return next({
      log: `Database error`,
      status: 502,
      message: { err: `${e.stack}` },
    });
  }
};

module.exports = performerController;
