import { prisma } from "../app";
import { Product, updateProduct } from "../types/product.type";


async function createProduct(userData: Product) {
    const Product = await prisma.product.create({
        data:   userData
    })
    return Product
}

async function findProduct(payload: any) {
    const page = Number(payload.page)
    const take = 4
    const skip = (page-1)*take
    const filters: any = {};
    if (payload.q) {
        filters.OR = [
            { name: { contains: payload.q } },
            { description: { contains: payload.q } },
        ];
    }

    if (payload.minPrice || payload.maxPrice) {
        filters.price = {};
        if (payload.minPrice) {
            filters.price.gte = parseFloat(payload.minPrice); 
        }
        if (payload.maxPrice) {
            filters.price.lte = parseFloat(payload.maxPrice); 
        }
    }
    const Product = await prisma.product.findMany({
        where: filters,
        skip: skip,
        take: take
    })
    return Product
}

async function updateProduct(productId: number, userData: updateProduct) {

    const Product = await prisma.product.update({
        where: {
            id: productId
        },
        data: userData
    })
    return Product
}

async function deleteProduct(productId: number) {
    const Product = await prisma.product.update({
        where: {
            id: productId
        },
        data: {
            isDeleted: true
        }
    })
    return Product
}


export default {
    createProduct,
    findProduct,
    updateProduct,
    deleteProduct
}