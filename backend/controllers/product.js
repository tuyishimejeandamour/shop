import Product from '../models/product.model.js'

export const createProduct = async (req, res) => {
	const { description, imageurl } = req.body;

	const product = new Product(req.body);
	await product.save();

	return res.status(201).json({ success: true, data: product });
}

export const getAllProduct = async (req, res) => {
	const products = await Product.find();

	return res.status(200).json({ success: true, data: products });

}


export const getProductById = async (req, res) => {
	const product = await Product.findOne({ _id: req.params.id });
	if (!product) return res.status(404).json({ success: false, message: "Product does not exist" });
	return res.status(200).json({ success: true, data: product });
}


export const updateProduct = async (req, res) => {
	const product = await Product.findOne({ _id: req.params.id });
	if (!product) return res.status(404).json({ success: false, message: "Product does not exist" });
	const newProduct = await Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
	return res.status(200).json({ success: true, data: newProduct });
}

export const deleteProduct = async (req, res) => {
	const product = await Product.findOne({ _id: req.params.id });
	if (!product) return res.status(404).json({ success: false, message: "Product does not exist" });
	await Product.findOneAndDelete({ _id: req.params.id });
	return res.status(200).json({ success: true, data: product });
}
