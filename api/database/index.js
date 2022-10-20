const mongoose = require('mongoose');

mongoose
  .connect(
    "mongodb+srv://jean:123@cluster0.f9mo2a8.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log('CONNEXION DB OK !');
  })
  .catch((e) => {
    console.log('CONNEXION KO !', e);
  });
