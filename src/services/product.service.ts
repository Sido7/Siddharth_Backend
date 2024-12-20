import { Product, updateProduct } from "../types/product.type";
import { productRepository } from "../repository";

async function createProductService(userData: Product) {
    try {
        const Product = await productRepository.createProduct(userData)
        return Product
    } catch (err) {
        console.log(err)
        throw err
    }
}

async function findProductService(payload: any) {
    try {
        const product = await productRepository.findProduct(payload)
        return product
    } catch (err) {
        console.log(err)
        throw err
    }
}

async function updateProductService(productId: number, userData: updateProduct) {
    try {
        const product = await productRepository.updateProduct(productId,userData)
        return product
    } catch (err) {
        console.log(err)
        throw err
    }
}

async function delteProductService(productId: number) {
    try {
        const product = await productRepository.deleteProduct(productId)
        return true
    } catch (err) {
        console.log(err)
        throw err
    }
}

export default {
    createProductService,
    findProductService,
    updateProductService,
    delteProductService
}