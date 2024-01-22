const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');
const cors = require('cors')
function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}
app.use(cors({
    origin:'http://localhost:5500'
}))
// Route with parameter
app.get('/api/adkar/:time', (req, res) => {
    const time = req.params.time;
    const validTimes = ['morning', 'evening', 'night'];
    
    if (validTimes.includes(time)) {
        const filePath = __dirname + `/${time}.json`;

        if (fs.existsSync(filePath)) {
            fs.readFile(filePath, 'utf8', (err, data) => {
                if (err) {
                    res.status(500).send('Error reading the file');
                } else {
                    const adkars = JSON.parse(data);
                    const randomAdkar = getRandomElement(adkars);
                    res.json({ 
                        title: `Adkar for ${time.charAt(0).toUpperCase() + time.slice(1)}`, 
                        message: randomAdkar 
                    });
                }
            });
        } else {
            res.status(404).send('File not found');
        }
    } else {
        res.status(400).send('Invalid time parameter');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Adkar API running on http://localhost:${port}`);
});
