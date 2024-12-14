const mongoose = require('mongoose');
mongoose.connect(process.env.mongodb)
  .then(() => console.log('数据库连上了!'));