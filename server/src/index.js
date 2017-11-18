import Koa from 'koa';
import serve from 'koa-static';

const app = new Koa();

const staticPath = path.join('client', 'dist');
app.use(serve(''))

app.use(ctx => { ctx.body = 'Hello, World!'; });

app.listen(3000);
