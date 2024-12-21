import app from './app';
import { secretes } from './secretes';
import './utils/cronJob.util';

const Port = secretes.Port || 3000;

async function startServer() {
    app.listen(Port, () => {
        console.log(`Server starting on port ${Port}`);
    });
}


startServer().then(() => console.log('Server started'));