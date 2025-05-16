import express from 'express';
import cors from 'cors';
import { productRouter } from './routes/product.route.js';
// import { connection } from './db/index.js';

const app = express();
app.use(express.json());
const port = 3000;

app.use(cors({
    origin: process.env.ORIGIN,
    credentials: true
}))

app.get('/', (req, res) => {

    // connection.connect((err) => {
    //     if (err) {
    //         console.log('Error connecting to the database', err.stack);
    //         console.error('Error connecting to the database', err.stack);
    //         res.status(500).send('Error connecting to the database');
    //         return;
    //     }
    //     console.log('Connected to the database');
    // });

    // connection.query('SELECT NOW()', (err, result) => {
    //     if (err) {
    //         console.error('Error executing query', err.stack);
    //         res.status(500).send('Error executing query');
    //     } else {
    //         console.log('Current time:', result.rows[0]);
    //         res.send(`Current time: ${result.rows[0].now}`);
    //     }
    // });
    // // connection.one.
    // console.log('Connected to the database');
    res.send('Hello World!');
});

// app.post('/api/add/product', async (req, res) => {
//     // body = await json(req.body)
//     console.log("body : ", req)
//     const { name, price, description, image_url } = req.body;
//     const result = addProduct(name, price, description, image_url);
//     if (result.error) {
//         console.error('Error adding product:', result.error);
//         res.status(500).send('Error adding product');
//         return;
//     }
//     res.send('Product added successfully!');
// });

app.use('/api/products', productRouter)

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
app.get('/api', (req, res) => {
    res.json({ message: 'Hello from the API!' });
});