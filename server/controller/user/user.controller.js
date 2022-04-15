const uri = process.env.MONGO_CONNECTION_STRING;
const mongo = require("mongodb");
const mongocli = mongo.MongoClient;

module.exports.getUsers = (request, response) => {
  const id = request.body.params.userId;
  const pw = request.body.params.password;

  let query = {};
  if (id !== undefined && id.length > 0) {
    query = { userid: id, password: pw };
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

module.exports.getUserDetails = (request, response) => {
  const id = request.params.userId;

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
      if (err) {
        return response.status(500).send({ err: "Error Occured!" });
      }

      let dbobj = db.db("Instagram");
      let userInfo;
      dbobj
        .collection("user")
        .find(query)
        .project({
          _id: 0,
          password: 0,
          email: 0,
          gender: 0,
          country: 0,
          createdate: 0,
          storydate: 0,
        })
        .toArray((err, result) => {
          if (err || !result) {
            return response.status(500).send({ err: "No data found!" });
          }

          userInfo = result;

          dbobj
            .collection("post")
            .find({ postby: id })
            .project({
              _id: 0,
              postid: 0,
              postby: 0,
              postbyphoto: 0,
              location: 0,
              caption: 0,
              likes: 0,
              comments: 0,
              posttime: 0,
            })
            .toArray((err, result) => {
              if (err) {
                return response.status(500).send({ err: "No user found!" });
              }
              userInfo[0].posts = result;
              response.send(userInfo);
              db.close;
            });
        });
    }
  );
};
