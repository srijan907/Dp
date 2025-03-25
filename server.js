const express = require('express');
const cors = require('cors');
const multer = require('multer');
const { getPairCode } = require('./api/pair');
const { updateWhatsAppDP } = require('./api/updateDP');

const app = express();
app.use(cors());
app.use(express.json());

const upload = multer({ dest: 'uploads/' });

app.get('/getPairCode', async (req, res) => {
    const whatsappNumber = req.query.number;
    if (!whatsappNumber) {
        return res.status(400).json({ error: "WhatsApp number is required" });
    }
    const pairCode = await getPairCode(whatsappNumber);
    res.json({ code: pairCode });
});

app.post('/uploadDP', upload.single('image'), async (req, res) => {
    const whatsappNumber = req.body.number;
    if (!whatsappNumber || !req.file) {
        return res.status(400).json({ error: "WhatsApp number and image are required" });
    }
    const success = await updateWhatsAppDP(whatsappNumber, req.file.path);
    res.json({ success });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
