import express from 'express';
import cors from 'cors';

const PORT = 3000;
const app = express();

app.use(express.text());
app.use(cors());

const DB: string[] = [];

app.get('/notes', (_req, res) => {
    console.log(DB);
    res.status(200).json({ notes: DB });
    res.end();
});

app.post('/note', (req, res) => {
    const { note }: { note: string } = JSON.parse(req.body);
    DB.push(note);
    res.status(200);
    res.end();
});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});
