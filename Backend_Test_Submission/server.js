import express from 'express';
import Log from '../Logging_Middleware/Log.js';
const app = express();
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.post('/log', async (req, res) => {
    const { stack, level, packageName, message } = req.body;
    const result = await Log({ stack, level, packageName, message });
    if (result.success) {
        res.status(200).send('Log Created Successfully');
    } else {
        res.status(500).json({ error: 'Failed to Create Log', details: result.error });
    }
});

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});