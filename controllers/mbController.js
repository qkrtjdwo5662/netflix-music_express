const connection = require('./dbConnect');

const getAll = (req, res)=> {
  connection.query(
    'select * from mainBanner;',
    (err, data) => {
      if(err) throw err;
      if(data.length === 0) res.status(500).send('메인배너 못 가져옴');
      const mainBanner = data;
      connection.query(
        `select * from album`, 
        (err, data) => {
          if(err) throw err;
          if(data.length === 0) res.status(500).send('메인앨범 못 가져옴');
          res.render('main.ejs',{mainBanner});
        }
      )
    }
  )
}

module.exports = {getAll};
