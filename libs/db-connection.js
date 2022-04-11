const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://ali:ali@cluster0.5ijaz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true});

mongoose.connection
  .once('open', () => console.log('Connected to the database'))
  .on('error', err => console.error(err));
