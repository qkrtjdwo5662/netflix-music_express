const connection = require('./dbConnect');

const userDB = {
  login: (loginInfo, cb) => {
    connection.query(`select * from user where user_ID='${loginInfo.id}' AND PASSWORD='${loginInfo.password}'`, (err, data) => {
      if (err) throw err;
      cb(data);
    });
  },
  join: (joinInfo, cb) => {
    connection.query(
      `insert into user(user_ID, user_NAME, PASSWORD) values('${joinInfo.id}', '${joinInfo.name}', '${joinInfo.password}')`,
      (err, data) => {
        if (err) throw err;
        cb(data);
      },
    );
  },
};

module.exports = userDB;
