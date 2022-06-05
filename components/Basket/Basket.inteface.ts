export interface IBasketForm {
    email: string;
    password: string;
}

export interface UserTokenPayload {
    email: string;
    iat?: number;
    _id: string;
}

//Cart start

export interface ProductsItem {
    productId: string;
}

export interface UserCartItem {
    "createdAt": Date;
    "updatedAt": Date;
    "__v": number;
    products: ProductsItem[]
}

export interface UserCartInfo {
    _id: string;
    cartCount: number;
    cart: UserCartItem
}

export interface UserCart {
    [key: number]: UserCartInfo
}

//Cart end