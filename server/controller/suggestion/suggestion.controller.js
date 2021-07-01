const uri = process.env.MONGO_CONNECTION_STRING;
const mongo = require("mongodb");
const mongocli = mongo.MongoClient;

module.exports.getSuggestion = (request, response) => {
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
          let follows = result[0].follows.map((elem) => {
            return elem.userid;
          });

          let followedBy = result[0].followedby.map((elem) => {
            return elem.userid;
          });

          if (id !== undefined) {
            follows.push(id);
          }

          let dbobj2 = db.db("Instagram");
          dbobj2
            .collection("user")
            .find({
              userid: { $nin: follows },
            })
            .project({
              _id: 0,
              password: 0,
              email: 0,
              gender: 0,
              country: 0,
              createdate: 0,
              follows: 0,
              storydate: 0,
              bio: 0,
            })
            .toArray((err, result) => {
              if (err) throw err;
              let suggestionResult = result;
              follows.pop();
              suggestionResult.unshift({ follows: follows });
              suggestionResult.unshift({ followedby: followedBy });
              response.send(result);
            });

          db.close;
        });
    }
  );
};