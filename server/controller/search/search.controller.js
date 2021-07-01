const uri = process.env.MONGO_CONNECTION_STRING;
const mongo = require("mongodb");
const mongocli = mongo.MongoClient;

module.exports.user = (request, response) => {
  const q = request.query.q;

  if (q === undefined || q.length === 0) {
    response.send("[]");
    return;
  }

  mongocli.connect(
    uri,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err, db) => {
      if (err) throw err;
      let dbobj = db.db("Instagram");
      dbobj
        .collection("user")
        .find({ $or: [{ userid: { $regex: q } }, { username: { $regex: q } }] })
        .project({
          _id: 0,
          password: 0,
          email: 0,
          gender: 0,
          country: 0,
          createdate: 0,
          followedby: 0,
          follows: 0,
          storydate: 0,
          bio: 0,
        })
        .toArray((err, result) => {
          if (err) throw err;
          response.send(result);
          db.close;
        });
    }
  );
};