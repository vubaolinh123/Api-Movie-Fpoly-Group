import Products from "../models/products"


export const create = async (req, res) => {
    try {
        const product = await new Products(req.body).save();
        res.json(product)
    } catch (error) {
        console.log(error);
        res.status(400).json(
            { error: "Không thêm được sản phẩm" }
        )
    }
}

export const list = async (req, res) => {
    try {
        const product = await Products.find().exec()
        res.json(product)
    } catch (error) {
        res.status(400).json(
            { error: "Không tim được sản phẩm" }
        )
    }
}