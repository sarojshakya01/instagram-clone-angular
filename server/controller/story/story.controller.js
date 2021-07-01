const uri = process.env.MONGO_CONNECTION_STRING;
const mongo = require("mongodb");
const mongocli = mongo.MongoClient;

module.exports.getStory = (request, response) => {
  const id = request.query.userId;
  let query = {};

  if (id !== undefined && id.length > 0) {
    query = { userid: id };
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
        .find(query)
        .project({ _id: 0 })
        .toArray((err, result) => {
          if (err) throw err;
          let follows = [];
          if (result[0].follows.length > 0) {
            follows = result[0].follows.map((elem) => {
              return elem.userid;
            });

            let dbobj2 = db.db("Instagram");
            dbobj2
              .collection("user")
              .find({
                userid: { $in: follows },
              })
              .project({
                _id: 0,
                password: 0,
                email: 0,
                gender: 0,
                country: 0,
                createdate: 0,
                followedby: 0,
                follows: 0,
                bio: 0,
              })
              .toArray((err, result) => {
                if (err) throw err;
                response.send(result);
              });
          } else {
            response.send("[]");
          }
          db.close;
        });
    }
  );
};