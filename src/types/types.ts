export interface ProductType {
id: number,
title: string,
price: number,
image: string,
description?: string,
rating?: {rate: number, count: number},
category?: string
}

export interface IProductListProps {
products: ProductType[]
}

export interface IProductDetailParams {
    params: {
        id: number
    }
}