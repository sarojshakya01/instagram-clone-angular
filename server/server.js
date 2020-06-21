const express = require("express");
const mongo = require("mongodb");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const router = express.Router();

const uri =
  "mongodb+srv://sarojsh:saroj123@cluster0.jb3wc.mongodb.net/Instagram?retryWrites=true&w=majority";

// const uri = "mongodb://127.0.0.1:27017/";

const mongocli = mongo.MongoClient;

// app.use(express.static("./build/"));
app.use("/api", router);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

dbConnectionTest = () => {
  console.log("Database connection testing...");
  mongocli.connect(
    uri,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err, db) => {
      if (err) throw err;
      console.log("Database Connected Successfully at " + uri);
      db.close;
      console.log("Database connection closed!");
    }
  );
};

// app.get("/", (request, response) => {
//   response.sendfile("./build/index.html");
// });

app.get("/post", (request, response) => {
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
});

app.post("/user", (request, response) => {
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
});

app.get("/userDetails", (request, response) => {
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
          if (err) throw err;

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
              if (err) throw err;
              userInfo[0].posts = result;
              response.send(userInfo);
              db.close;
            });
        });
    }
  );
});

app.get("/search", (request, response) => {
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
});

app.get("/story", (request, response) => {
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
});

app.get("/suggestion", (request, response) => {
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
});

app.post("/likePost", (request, response) => {
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
});

app.post("/addComment", (request, response) => {
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
});

app.post("/deleteComment", (request, response) => {
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
});

app.post("/likeComment", (request, response) => {
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
});

const port = 3001;

app.listen(port, () => {
  console.log("Server Running at localhost:" + port);
  dbConnectionTest();
});
