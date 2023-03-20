const connection = require('./dbConnect');

const mbDB = {
  getAll: (cb) => {
    connection.query('select * from mainBanner;', (err, data) => {
      if (err) throw err;
      cb(data);
    });
  },
};

module.exports = mbDB;
