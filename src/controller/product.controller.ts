import { userAddressService, productService } from "../services";

import { Request, Response } from "express";
import { Product, updateProduct} from "../types/product.type";

const createProductController = async (req: Request, res: Response) => {
    const data: Product = req.body;
    const userId = res.locals.id;
    const result = await productService.createProductService(data);
    res.status(201).json({data:result});
}

const updateProductController = async (req: Request, res: Response) => {
    const data: updateProduct = req.body;
    const productId: number = Number(req.params.id)
    const result = await productService.updateProductService(productId,data);
    res.status(201).json({data:result});
}

const delteProductController = async (req: Request, res: Response) => {
    const productId: number = Number(req.params.id)
    const result = await productService.delteProductService(productId);
    res.status(201).json(result);
}

const findProductController = async (req: Request, res: Response) => {
    const payload = req.query;
    const result = await productService.findProductService(payload);
    res.status(201).json({data:result});
}
export {
    createProductController,
    updateProductController,
    delteProductController,
    findProductController
}