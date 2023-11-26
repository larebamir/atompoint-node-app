const db = require('./firebaseConfig');

function simulateIoTDevice() {
  setInterval(() => {
    const timestamp = new Date();
    const data = {
      temperature: Math.random() * 100,
      humidity: Math.random() * 100,
    };

    // Save data to Firebase
    db.collection('statusUpdate').add({ timestamp, ...data });
  }, 5000);
}

simulateIoTDevice();