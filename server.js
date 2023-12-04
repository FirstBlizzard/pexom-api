const { app } = require('./app');

const { loadAssociations } = require('./utils/relations');

// Utils
const { db } = require('./utils/database');

db.authenticate()
  .then(() => {
    console.log('Database authenticated');
  })
  .catch(err => console.log(err));

// Establish models relations
loadAssociations()

db.sync()
  .then(() => {
    console.log('Database synced');
  })
  .catch(err => console.log(err));

// Spin up server
const PORT = 3306;
app.listen(PORT, () => {
  console.log(`Express app running on port: ${PORT}`);
});