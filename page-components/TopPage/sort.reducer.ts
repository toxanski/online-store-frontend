import { SortEnum } from "../../components/Sort/Sort.props";
import { ProductModel } from "../../interfaces/product.interface";

// export type SortActions = { type: SortEnum.Rating } | { type: SortEnum.Price };
export type SortActions = { type: SortEnum } | { type: 'reset', initialState: ProductModel[] };

export interface SortReducerState {
    sort: SortEnum,
    products: ProductModel[];
}

export function sortReducer(state: SortReducerState, action: SortActions) {
    switch (action.type) {
        case SortEnum.Price:
            return {
                sort: SortEnum.Price,
                products: state.products.sort((a, b) =>
                    a.price > b.price ? 1 : -1
                )
            };
        case SortEnum.Rating:
            return {
                sort: SortEnum.Rating,
                products: state.products.sort((a, b) => {
                    if (!a.reviewAvg || !b.reviewAvg) return -1;
                    return a.reviewAvg > b.reviewAvg ? -1 : 1;
                })
            };
        case "reset":
            return {
                sort: SortEnum.Rating,
                products: action.initialState
            };
    }
}