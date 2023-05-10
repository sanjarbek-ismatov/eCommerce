import { Response } from "express";
import { Product } from "../models/product.model";
import { productValidator } from "../helpers/validator";
import { NodeRequest } from "../types";
import { sluggenerator } from "../helpers/sluggenerator";

async function getAll(req: NodeRequest, res: Response) {
  console.log(req?.user);
  const products = await Product.find().populate("vendor");
  res.status(200).send(products);
}

async function create(req: NodeRequest, res: Response) {
  const { error } = productValidator(req.body);

  if (error)
    return res
      .status(400)
      .send({ code: 400, message: error.details[0].message });
  const newProduct = await Product.create(req.body);
  newProduct.category = req.body.category.split(/\s*,\s*/g);
  newProduct.slug = sluggenerator(newProduct.name);
  if (req.vendor) {
    newProduct.vendor = req.vendor;
    req.vendor.products.push(newProduct);
    await req.vendor.save();
  }
  if (Array.isArray(req.files)) {
    newProduct.images = req.files?.map((e: Express.Multer.File) => e.filename);
  }
  await newProduct.save();
  res.status(201).send({ code: 201, message: "Yaratildi!" });
}

export default { getAll, create };
