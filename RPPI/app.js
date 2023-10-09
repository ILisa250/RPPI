const express = require('express');
const pool = require("./db");
const cors = require("cors");


const app = express();
app.use(cors());
const port = 3000;

app.use(express.static('public')); 

app.get('/getIndices', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM "Quarterly_Indices_2022_byPropertyType"');
        res.json(result.rows);
    } catch (error) {
        console.error('Error executing database query:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
app.get('/getIndicesbyRegionhouse', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM "House_Quarterly_Indices_2022_byRegion"');
        res.json(result.rows);
    } catch (error) {
        console.error('Error executing database query:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
app.get('/getIndicesbyRegionapart', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM "Apartment_Quarterly_Indices_2022_byRegion"');
        res.json(result.rows);
    } catch (error) {
        console.error('Error executing database query:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
app.get('/getcountsbyRegion', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM "CountsAndWeights_byRegion"');
        res.json(result.rows);
    } catch (error) {
        console.error('Error executing database query:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
app.get('/gettimedummy', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM "TDHM_Indices"');
        res.json(result.rows);
    } catch (error) {
        console.error('Error executing database query:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
