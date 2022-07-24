require('./config/mongoose.config');
const express = require('express');
const app = express();
const PORT = 8001;
const cors = require('cors');

app.use(express.json());
// app.use(cors()); USE THIS FOR THE EXAM
app.use(cors({ origin: 'http://localhost:3000' }));

require('./routes/author.routes')(app);

app.listen(PORT, () => console.log(`Server is up on ${PORT}`));