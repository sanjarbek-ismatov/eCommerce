import { Response } from "express";
import { Discount, Product } from "../models/product.model";
import { productValidator } from "../helpers/validator";
import { NodeRequest } from "../types";
import { sluggenerator } from "../helpers/sluggenerator";

async function getAll(req: NodeRequest, res: Response) {
  const products = await Product.find().populate("vendor category discounts");
  res.status(200).send(products);
}

async function create(req: NodeRequest, res: Response) {
  const { error } = productValidator(req.body);
  console.log("1")
  console.log(error?.details[0].message)
  if (error)
    return res
      .status(400)
      .send({ code: 400, message: error.details[0].message });
  console.log("2")
  const newProduct = new Product(req.body);
  console.log("3")
  newProduct.slug = sluggenerator(newProduct.name);
  console.log("4")
  if (req.vendor) {
    console.log("5")
    newProduct.vendor = req.vendor;
    console.log("6")
    req.vendor.products.push(newProduct);
    console.log("7")
    await req.vendor.save();
    console.log("8")
  }
  console.log("9")
  if (Array.isArray(req.files)) {
    console.log("10")
    newProduct.images = req.files?.map((e: Express.Multer.File) => e.filename);
    console.log("11")
  }
  console.log("12")
  await newProduct.save();
  console.log("13")
  res.status(201).send({ code: 201, message: "Yaratildi!" });
  console.log("14")
}

async function deleteProduct(req: NodeRequest, res: Response) {
  const productId = req.body.id;
  await Product.findByIdAndDelete(productId);
  req.vendor?.products.splice(
    req.vendor?.products.findIndex((e) => e._id.toString() === productId),
    1,
  );
  await req.vendor?.save();
  res.status(204).send({ code: 204, message: "ok" });
}

async function addDiscount(req: NodeRequest, res: Response) {
  if (!req.body.percent)
    return res.status(400).send({ code: 400, message: "Bad request" });
  const discount = new Discount({ percent: req.body.percent });
  await discount.save();
  for (const id of req.body.products) {
    const product = await Product.findById(id);
    product?.discounts.push(discount._id);
    await product?.save();
  }

  res.status(200).send({ message: "Chegirma qo'shildi", status: 200 });
}

async function removeDiscount(req: NodeRequest, res: Response) {
  if (req.body.type === "all") {
    await Discount.deleteMany({});
  } else {
    const discount = await Discount.findByIdAndDelete(req.body.id);
    if (!discount)
      return res.status(404).send({ code: 404, message: "Topilmadi" });
  }
  res.status(204).send({ code: 204, message: "O'chirildi" });
}

async function getAllDiscounts(req: NodeRequest, res: Response) {
  const discounts = await Discount.find();
  res.status(200).send(discounts);
}

async function getBySlug(req: NodeRequest, res: Response) {
  const product = await Product.findOne({ slug: req.params.slug }).populate({
    path: "reviews",
    populate: {
      path: "clientId",
    },
  });
  if (!product)
    return res.status(404).send({ code: 404, message: "not found" });
  res.status(200).send(product);
}

export default {
  getAll,
  create,
  getBySlug,
  deleteProduct,
  addDiscount,
  removeDiscount,
  getAllDiscounts,
};
