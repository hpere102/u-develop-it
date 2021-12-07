const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const db = require('./db/connection');


//routes
const apiRoutes = require('./routes/apiRoutes');


// Express middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// url defined
app.use('/api', apiRoutes);

  

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
  });
  

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});