import path from 'path'
import serve from 'koa-static'
const core = require('../server/core');
const app = core();
const port = app.port;

app.use(serve(path.resolve(__dirname, '../dist/client')));
app.listen(port);

console.log(`Listening on port ${port}. Open up http://localhost:${port}/ in your browser.\n`);
