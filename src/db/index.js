// // import {client} from 'pg-promise';

// // const { Pool } = pg;


// // import {Client} from 'pg';
// import pg from 'pg-promise';
// import dotenv from 'dotenv';
// dotenv.config();


// // const pgp = pg();
// // const options = {
// //     host: process.env.POSTGRESQL_HOST,
// //     port: process.env.POSTGRESQL_PORT,
// //     database: process.env.POSTGRESQL_DBNAME,
// //     user: process.env.POSTGRESQL_USERNAME,
// //     password: process.env.POSTGRESQL_PASSWORD,
// // };


import pg from 'pg-promise';
import dotenv from 'dotenv';
import { Buffer } from "buffer";


dotenv.config();



const pgPool = pg();

// For Production

const options = {
    host: process.env.POSTGRESQL_HOST,
    port: process.env.POSTGRESQL_PORT,
    database: process.env.POSTGRESQL_DBNAME,
    user: process.env.POSTGRESQL_USERNAME,
    password: process.env.POSTGRESQL_PASSWORD,
    ssl: {
        rejectUnauthorized: true,
        ca: `-----BEGIN CERTIFICATE-----
${process.env.POSTGRESQL_SSL_CA.replace(/\\n/g, '\n')}
-----END CERTIFICATE-----`,
    },
}


// //  For Local Development

// const options = {
//     host: process.env.POSTGRESQL_HOST,
//     port: process.env.POSTGRESQL_PORT,
//     database: process.env.POSTGRESQL_DBNAME,
//     user: process.env.POSTGRESQL_USERNAME,
//     password: process.env.POSTGRESQL_PASSWORD,

// }

// let ca = `-----BEGIN CERTIFICATE-----
// ${process.env.POSTGRESQL_SSL_CA.replace(/\\n/g, '\n')}
// -----END CERTIFICATE-----`;

// console.log("CA : ", ca)
const connection = pgPool(options);
// const query = await connection.query('SELECT * FROM users');
// const insert = await connection.query('INSERT INTO users(name, email) VALUES($1, $2)', ['John Doe', 'gBt4K@example.com']);
// const query2 = await connection.query('SELECT * FROM users');
// let result = await connection.result('SELECT * FROM users');

// console.log('list the records from users table :', result);
// result = await connection.result("INSERT INTO users(name, email) VALUES($1, $2)", [null, null]);
// console.log('Inserted:', result.rowCount);

// // console.log('Tables:', query);


await connection.none(
    `CREATE TABLE IF NOT EXISTS products(
    ID SERIAL PRIMARY KEY,
    Name VARCHAR(255) NOT NULL,
    Price DECIMAL(10, 2) NOT NULL,
    Description TEXT,
    Image_urls TEXT[],
    Created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`
)


// function addProduct(name, price, description, image_url) {
//     return connection.result('INSERT INTO products(Name, Price, Description, Image_url) VALUES($1, $2, $3, $4)', [name, price, description, image_url]);

// }

/*

https://rukminim2.flixcart.com/image/832/832/xif0q/sari/b/t/n/free-324-salco-unstitched-original-imah6s59bzgttcjq.jpeg?q=70&crop=false,https://rukminim2.flixcart.com/image/832/832/xif0q/sari/n/c/p/-original-imagvz7mc4uxtwgv.jpeg?q=70&crop=false,https://rukminim2.flixcart.com/image/832/832/xif0q/sari/n/i/c/free-zimmy-choo-designer-saree-pd-cloth-villa-unstitched-original-imahbprgascqp8pj.jpeg?q=70&crop=false,https://rukminim2.flixcart.com/image/832/832/xif0q/sari/a/c/b/free-sarees-new2023-partywear-wedding-chiffon-saree-design-2023-original-imah8xpkusz2hdys.jpeg?q=70&crop=false





*/

export { connection };