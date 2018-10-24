/* eslint-disable no-console */

// messages-model.js - A KnexJS
// 
// See http://knexjs.org/
// for more of what you can do here.
module.exports = function (app) {
  const db = app.get('knexClient');
  const tableName = 'matches_conversations';
  db.schema.hasTable(tableName).then(exists => {
    
  });
  

  return db;
};
