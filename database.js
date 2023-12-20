const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose.connect(process.env.DATABASE);
  console.log("Database connected");
  // , {
  //   // useNewUrlParse: true,
  //   // useUnifiedTopology: true,
  //   // i commented line 7-8 because line 7 is not supported and line 8 is deprecated
  // });
};

module.exports = connectDatabase;
