// import mongoose from 'mongoose';

// const mongoURI = 'mongodb://127.0.0.1:27017/myspace';

// const db = mongoose.connect(mongoURI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useFindAndModify: false,
//   useCreateIndex: true,
// });

// db.then(() => console.log(`Connected to: ${mongoURI}`)).catch((error) => {
//   console.error(
//     `There was a problem connecting to mongo at: ${mongoURI}`,
//     error,
//   );
// });

// export default db;

// const mongoose = require('mongoose');

// const { usersSchema } = require('./schemas/users');
// const { toolsSchema } = require('./schemas/tools');
// const { projectsSchema } = require('./schemas/projects');

// mongoose.connect('mongodb://localhost:27017/wolfebyte-net', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useFindAndModify: false,
//   useCreateIndex: true,
// })
//   .catch((err) => new Error('Error connecting w/ Mongoose: ', err));

// exports.User = mongoose.model('User', usersSchema);
// exports.Tool = mongoose.model('Tool', toolsSchema);
// exports.Project = mongoose.model('Project', projectsSchema);
