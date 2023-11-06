import express from 'express';
import routes from './routes/index';
import File from './file';

const app: express.Application = express();
const port = 3000; 

app.use(routes);

// Create Server
app.listen(port, ()=> {
  (async () => {
    await File.createThumbPath();
  })();

  console.log(`Server start at http://localhost:${port}`)
});

export default app;