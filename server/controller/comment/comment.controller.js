const uri = process.env.MONGO_CONNECTION_STRING;
const mongo = require("mongodb");
const mongocli = mongo.MongoClient;

module.exports.addComment = (request, response) => {
  const id = parseInt(request.body.params.postId);
  const newComment = {
    commentby: request.body.params.commentBy,
    mention: request.body.params.mention,
    comment: request.body.params.comment,
    likes: [],
  };

  if (newComment.commentby === "" || newComment.comment === "") {
    response.send("[]");
    return;
  }

  let query = {};
  if (id !== undefined && id > 0) {
    query = { postid: id };
  } else {
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
      dbobj.collection("post").findOneAndUpdate(
        query,
        {
          $push: { comments: newComment },
        },
        (err, result) => {
          if (err) throw err;
          response.send(newComment);
          db.close;
        }
      );
    }
  );
};

module.exports.deleteComment = (request, response) => {
  setTimeout(() => {
    const id = parseInt(request.body.params.postId);
    const commentId = parseInt(request.body.params.commentId);

    if (isNaN(commentId)) {
      response.send("[]");
      return;
    }

    let query = {};
    if (!isNaN(id) && id > 0) {
      query = { postid: id };
    } else {
      response.send("[]");
      return;
    }
    const keyString = `comments.${commentId}`;

    const deleteCondition = {
      unset: {
        $unset: { [keyString]: 1 },
      },
      pull: { $pull: { comments: null } },
    };

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
          .findOneAndUpdate(query, deleteCondition.unset, (err, result) => {
            if (err) throw err;
            db.close;
            dbobj
              .collection("post")
              .findOneAndUpdate(query, deleteCondition.pull, (err, result) => {
                dbobj
                  .collection("post")
                  .find(query)
                  .project({ _id: 0 })
                  .toArray((err, result) => {
                    if (err) throw err;

                    response.send(result[0].comments);
                    db.close;
                  });
              });
          });
      }
    );
  }, 0);
};

module.exports.likeCommment = (request, response) => {
  const id = parseInt(request.body.params.postId);
  const commentId = parseInt(request.body.params.commentId);
  const likedBy = request.body.params.likedBy;
  const liked = request.body.params.liked;

  const keyString = `comments.${commentId}.likes`;
  let updateCondition;

  if (liked) {
    updateCondition = {
      $addToSet: { [keyString]: likedBy },
    };
  } else {
    updateCondition = {
      $pull: { [keyString]: likedBy },
    };
  }

  let query = {};
  if (id !== undefined && id > 0) {
    query = { postid: id };
  } else {
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
        .collection("post")
        .findOneAndUpdate(query, updateCondition, (err, result) => {
          if (err) throw err;
          dbobj
            .collection("post")
            .find(query)
            .project({ _id: 0 })
            .toArray((err, result) => {
              if (err) throw err;
              response.send(result[0].comments[commentId].likes);
              db.close;
            });
        });
    }
  );
};