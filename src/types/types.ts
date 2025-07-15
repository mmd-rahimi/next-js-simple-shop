export interface TProductType {
id: number,
title: string,
price: number,
image: string,
description?: string,
rating?: {rate: number, count: number},
category?: string
}

export interface IProductListProps {
products: TProductType[]
}

export interface IProductDetailParams {
    params: {
        id: number
    }
}