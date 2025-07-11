export interface ProductType {
id: number,
title: string,
price: number,
image: string
}

export interface IProductListProps {
products: ProductType[]
}
