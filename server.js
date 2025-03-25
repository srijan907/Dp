const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Homepage Route
app.get('/', (req, res) => {
    res.send('🚀 Server is Running! WebPair API Connected.');
});

// Pair Code Generate Route
app.post('/generate-pair', (req, res) => {
    const { phone } = req.body;

    if (!phone) {
        return res.status(400).json({ error: 'WhatsApp number is required!' });
    }

    // Generate a Random Pair Code (Example: 6-digit)
    const pairCode = Math.floor(100000 + Math.random() * 900000);
    
    res.json({ phone, pairCode });
});

// Start Server
app.listen(port, () => {
    console.log(`✅ Server is running at http://localhost:${port}`);
});
