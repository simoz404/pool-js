import { readFile } from 'fs/promises';
import http from 'http';

const server = http.createServer( async (req, res) => {
    try {
        res.writeHead(200,
            {
                'Content-Type':
                    'application/json'
            });
        let content = await readFile('guests'+req.url+'.json', 'utf8')
        res.end(content)
    } catch (error) {
        if (error.code === "ENOENT") {
            res.writeHead(404,
                {
                    'Content-Type':
                        'application/json'
                });
            res.end(JSON.stringify({
                error: 'guest not found'
            }))
        } else {
            res.writeHead(500,
                {
                    'Content-Type':
                        'application/json'
                });
            res.end(JSON.stringify({
                error: 'server failed'
            }));
        }
    }
    
});

server.listen(5000, () => {
  console.log('Server is running on port 5000');
});
