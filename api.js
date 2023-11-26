const express = require('express');
const db = require('./firebaseConfig');
const cors = require('cors'); 
const app = express();
const port = 3002;

app.get('/currentStatus', async (req, res) => {
  // Retrieve the latest status from Firebase
  const latestStatus = await db.collection('statusUpdates').orderBy('timestamp', 'desc').limit(1).get();

  // Return the latest status
  res.json(latestStatus.docs[0].data());
});

app.get('/statusHistory', async (req, res) => {
  // Retrieve the entire status history from Firebase
  const statusHistory = await db.collection('statusUpdates').orderBy('timestamp', 'desc').get();

  // Return the status history
  res.json(statusHistory.docs.map(doc => doc.data()));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.use(cors({
    origin: 'http://localhost:3002', // Actual frontend domain
    optionsSuccessStatus: 200,
  }));