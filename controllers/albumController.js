const connection = require('./dbConnect');

const albumDB = {
  getAll: (cb) => {
    connection.query('select * from album', (err, data) => {
      if (err) throw err;
      cb(data);
    });
  },
  insertImg: (img, cb) => {
    connection.query(`update album set ALBUM_IMG='${img}' where TRACK_ID = 1;`, (err, data) => {
      if (err) throw err;
      cb(data);
    });
  },
};

module.exports = albumDB;
