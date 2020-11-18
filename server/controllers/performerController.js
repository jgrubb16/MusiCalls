const db = require('../models/performerModel');

const performerController = {};

//middleware

performerController.getPerformer = async (req, res, next) => {
  // const char = `SELECT * FROM people`;
  const performer = `SELECT name FROM "public"."performers"`;
  try {
    res.locals.performers = await db.query(performer);
    // await console.log(res.locals.characters.rows);
    next();
  } catch (e) {
    return next({
      log: `Database error`,
      status: 502,
      message: { err: `${e.stack}` },
    });
  }
};
