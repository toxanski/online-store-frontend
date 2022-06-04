export interface IReviewForm {
    name: string;
    title: string;
    rating: number;
    description: string;
}

export interface IReviewFormResponse {
    "_id": string,
    "name": string,
    "title": string,
    "description": string,
    "rating": number,
    "productId": string,
    "createdAt": Date,
    "updatedAt": Date,
    "__v": number
}