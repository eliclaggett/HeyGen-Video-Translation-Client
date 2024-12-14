import express, { Request, Response } from 'express';

const DELAY = parseInt(process.env.DELAY || '3000');
const DELAY_VAR = parseInt(process.env.DELAY_VAR || '2000');

function serveStatus(req : Request, res : Response) : void {
    const headers = {
        'Content-Type': 'text/event-stream',
        'Connection': 'keep-alive',
        'Cache-Control': 'no-cache',
        'Content-Encoding': 'none',
        'Access-Control-Allow-Origin': '*'
    };

    res.writeHead(200, headers);

    res.write('data: {"result": "pending"}\n\n');

    // Calculate random processing delay
    let delay = DELAY + DELAY_VAR - Math.random() * DELAY_VAR * 2;
    if (delay < 0) delay = 0;

    setTimeout(() => {
        res.write('data: {"result": "completed"}\n\n');
        res.end();
    }, delay);    
}

function serve404(req : Request, res : Response) : void {
    res.status(404).sendFile(__dirname + '/static/404.html');
}

export { serveStatus, serve404 };