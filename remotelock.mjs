import express from 'express';
import { index } from './routes/index.mjs';
import { OutGPIO } from './helpers/OutGPIO.mjs';
import { gotkey } from './routes/gotkey.mjs';

// Create the express application
const app = express();

// Select the middleware to decode incoming posts
app.use(express.urlencoded({ extended: false }));

// Select ejs middleware
app.set('view-engine', 'ejs');

// Connect the route handlers to the routes
app.use('/index.html', index);
app.use('/gotkey', gotkey);

// Create lock control
let lockControl = new OutGPIO();
lockControl.init();
export { lockControl as lockControl };

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log("Server running");
})
