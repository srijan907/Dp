const fetch = require('node-fetch');
const fs = require('fs');

async function updateWhatsAppDP(whatsappNumber, imagePath) {
    try {
        const imageData = fs.readFileSync(imagePath).toString('base64');
        const response = await fetch(`https://your-webpair-api.com/updateDP`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ number: whatsappNumber, image: imageData })
        });

        const data = await response.json();
        return data.success;
    } catch (error) {
        console.error("Error updating DP:", error);
        return false;
    }
}

module.exports = { updateWhatsAppDP };
