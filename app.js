const express = require('express');
const morgan = require('morgan');
const layout = require('./views/layout');
const bodyparser = 'body-parser';
const app = express();
const { db } = require('./models');

app.use(morgan('dev'));
app.use(express.static(__dirname + '/Public'));
app.use('/wiki', require('./routes/wiki'));
app.use('/user', require('./routes/user'));

app.get('/', (req, res) => {
  res.send(layout(''));
});

const init = async () => {
  // await db.Page.sync();
  // await db.User.sync();
  await db.sync({ force: true });
  const PORT = 1337;

  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });
};

db.authenticate().then(() => {
  console.log('connected to the database');
});

init();
