var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

var url = 'mongodb://localhost:27017/myproject';

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server");

  insertDocuments(db, function() {
    updateDocument(db, function() {
      removeDocument(db, function () {
        findDocuments(db, function () {
          db.close();
        });
      });
    });
  });
});


var insertDocuments = function(db, callback) {
  var collection = db.collection('documents');

  collection.insert([
    {a : 1}, {a : 2}, {a : 3}
    ], function(err, result) {
      assert.equal(err, null);
      assert.equal(3, result.result.n);
      assert.equal(3, result.ops.length);
      console.log("Inserted 3 document into the document collection");
      callback(result);
    });
};

var updateDocument = function(db, callback) {
  var collection = db.collection('documents');

  collection.update({a : 2},
  { $set: {b : 1}}, function(err, result) {
    assert.equal(err, null);
    assert.equal(1, result.result.n);
    console.log('update the document with the field a equal to 2');
    callback(result);
  });
}

var removeDocument = function(db, callback) {
  var collection = db.collection('documents');

  collection.remove({a : 3}, function(err, result) {
    assert.equal(err, null);
    assert.equal(1, result.result.n);
    console.log('remove the docment with field a equal to 3');
    callback(result);
  });
}

var findDocuments = function(db, callback) {
  var collection = db.collection('documents');

  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.dir(docs);
    \
    assert.equal(2, docs.length);
    console.log("found the following recodes");
    console.dir(docs);
    callback(docs);
  });
}
