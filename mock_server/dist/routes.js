"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serveStatus = serveStatus;
exports.serve404 = serve404;
const delay = 3000;
function serveStatus(req, res) {
    const headers = {
        'Content-Type': 'text/event-stream',
        'Connection': 'keep-alive',
        'Cache-Control': 'no-cache',
        'Content-Encoding': 'none',
        'Access-Control-Allow-Origin': '*'
    };
    res.writeHead(200, headers);
    res.write('data: {"result": "pending"}\n\n');
    setTimeout(() => {
        res.write('data: {"result": "completed"}\n\n');
        res.end();
    }, delay);
}
function serve404(req, res) {
    res.status(404).sendFile(__dirname + '/static/404.html');
}
