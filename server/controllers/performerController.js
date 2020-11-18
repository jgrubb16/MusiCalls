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

performerController.addMessage = async (req, res, next) => {
  // const char = `SELECT * FROM people`;
  console.log('Jordan: ', req.body);
  const update = `insert into SALE (performer_id,message)
  values (10,'howdy')`;
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
