require("dotenv").config();

const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

// const mongoURI ="mongodb+srv://rohitmengji:6361614017@cluster0.cyjr6kh.mongodb.net/foodiemern?retryWrites=true&w=majority";
const mongoURI = process.env.MONGO_URI;
console.log("MongoURI:", mongoURI);

module.exports = function (callback) {
  mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
    if (err) console.log("Error Found ---" + err);
    else {
      // var database =
      console.log("connected to mongo");
      const foodCollection = await mongoose.connection.db.collection(
        "food_items"
      );
      foodCollection.find({}).toArray(async function (err, data) {
        const categoryCollection = await mongoose.connection.db.collection(
          "Categories"
        );
        categoryCollection.find({}).toArray(async function (err, Catdata) {
          callback(err, data, Catdata);
        });
      });
    }
  });
};
