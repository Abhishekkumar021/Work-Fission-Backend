import { connection } from '../db/index.js';
const addProduct = async (req, res) => {
    try {
        const { name, price, image_urls, description } = req.body;
        // console.log("Image URLs : ", image_urls)
        const result = await connection.result("INSERT INTO products(name, price, image_urls, description) VALUES($1, $2, $3, $4)", [name, price, image_urls, description]);
        // console.log("result : ", result)

    
        return res.status(200).json({
            message: "Product added successfully",
            data: {
                name,
                price,
                image_urls,
                description
            }
        })
        // console.log("Name : ", name)

    } catch (error) {
        console.log(error)
    }
}


const getAllProducts = async (req, res) => {
    try {
        const result = await connection.query("SELECT * FROM products");
        // console.log("result : ", result)
        return res.status(200).json({
            message: "Products fetched successfully",
            products: result
        })
    } catch (error) {
        console.log(error)
    }
}

const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        // console.log("ID : ", id)
        const result = await connection.query("SELECT * FROM products WHERE ID = $1", [id]);
        return res.status(200).json({
            message: "Product fetched successfully",
            product: result
        })
    } catch (error) {
        console.log(error)
    }
}

export { addProduct, getAllProducts, getProductById };