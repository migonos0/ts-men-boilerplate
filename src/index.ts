import express, {Request, Response} from 'express';
import {connect} from './utilities/connection.utility';
import {log} from './utilities/logger.utility';
import {routes} from './routes/index.router';
import {isEnvironmentReady} from './utilities/environment.utility';

if (
    !isEnvironmentReady((msg) => {
        log.error(msg);
    })
)
    process.exit(1);

const PORT = process.env.PORT;

const app = express();
app.use(express.json());
app.use('/api', routes);

app.get('/', (req: Request, res: Response) => {
    return res.sendStatus(200);
});

app.listen(PORT, async () => {
    await connect();
    log.info(`Server Running here 👉 http://localhost:${PORT} 🚀`);
});
