export const API = {
    topPage: {
        find: `${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`,
        byAlias: `${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/byAlias`
    },
    product: {
        find: `${process.env.NEXT_PUBLIC_DOMAIN}/api/product/find`,
        getProductById: `${process.env.NEXT_PUBLIC_DOMAIN}/api/product`
    },
    review: {
        create: `${process.env.NEXT_PUBLIC_DOMAIN}/api/review/create`
    },
    auth: {
        login: `${process.env.NEXT_PUBLIC_DOMAIN}/api/auth/login`,
        register: `${process.env.NEXT_PUBLIC_DOMAIN}/api/auth/register`,
        getCart: `${process.env.NEXT_PUBLIC_DOMAIN}/api/auth/cart`
    },
    cart: {
        add: `${process.env.NEXT_PUBLIC_DOMAIN}/api/cart/add`
    }
};