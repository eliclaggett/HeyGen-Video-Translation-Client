import express, { Request, Response } from 'express';
import { serveStatus, serve404 } from './routes';
import cors from 'cors';

const app = express();
const port = 8000;

app.use(cors());

// Define routes

// GET /status
app.get('/status', (req: Request, res: Response) => {
    serveStatus(req, res);
});

// 404: (Must be last route)
app.get('*', (req: Request, res: Response) => {
    serve404(req, res);
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});