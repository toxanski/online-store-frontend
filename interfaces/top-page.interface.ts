export enum TopPageCategory {
    Courses,
    Services,
    Books,
    Products
}

export interface TopPageAdvantage {
    title: string;
    description: string;
    _id: string;
}

export interface TopPageModel {
    _id: string;
    firstCategory: TopPageCategory;
    secondCategory: string;
    alias: string;
    title: string;
    category: string;
    advantages?: TopPageAdvantage[];
    seoText?: string;
    tagsTitle: string;
    tags: string[];
    createdAt: Date;
    updatedAt: Date;
}