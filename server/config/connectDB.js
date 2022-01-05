const mongoose = require("mongoose");

const connectToMongo = async () => {
  try {
    await mongoose.connect(
      "mongodb://waldo-dev:pordouglas25@cluster0-shard-00-00.ash1q.mongodb.net:27017,cluster0-shard-00-01.ash1q.mongodb.net:27017,cluster0-shard-00-02.ash1q.mongodb.net:27017/chistes?ssl=true&replicaSet=atlas-c44aix-shard-0&authSource=admin&retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    console.log("Conectado a base de datos");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectToMongo;
