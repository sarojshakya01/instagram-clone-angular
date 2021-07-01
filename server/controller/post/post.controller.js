
const uri = process.env.MONGO_CONNECTION_STRING;
const mongo = require("mongodb");
const mongocli = mongo.MongoClient;

module.exports.getPosts = (request, response) => {
  const id = request.query.postId;
  let query = {};

  if (id !== undefined && id.length > 0) {
    query = { id: id };
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
        .collection("post")
        .find(query)
        .project({ _id: 0 })
        .toArray((err, result) => {
          if (err) throw err;
          result.unshift({ loginUser: "sarojsh01" });
          response.send(result);
          db.close;
        });
    }
  );
};

module.exports.likePost = (request, response) => {
  const id = parseInt(request.body.params.postId);
  const liked = request.body.params.liked;
  const likedBy = "sarojsh01";

  let updateCondition;

  if (liked) {
    updateCondition = {
      $addToSet: { likes: likedBy },
    };
  } else {
    updateCondition = { $pull: { likes: likedBy } };
  }

  let query = {};
  if (!isNaN(id) && id > 0) {
    query = { postid: id };
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
        .collection("post")
        .findOneAndUpdate(query, updateCondition, (err, result) => {
          if (err) throw err;
          dbobj
            .collection("post")
            .find(query)
            .project({ _id: 0 })
            .toArray((err, result) => {
              if (err) throw err;
              response.send(result[0].likes);
              db.close;
            });
        });
    }
  );
};