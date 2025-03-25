const fetch = require('node-fetch');

async function getPairCode(whatsappNumber) {
    try {
        const response = await fetch(`https://your-webpair-api.com/generate?number=${whatsappNumber}`);
        const data = await response.json();
        return data.pairCode;
    } catch (error) {
        console.error("Error getting Pair Code:", error);
        return null;
    }
}

module.exports = { getPairCode };
