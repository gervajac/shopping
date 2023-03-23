import { Product } from "../interfaces/interfaces.product";

type ProductAction = {type: "products", payload: Product}

export const ProductReducer = (state: any, action: ProductAction) => {
    switch(action.type) {
        case "products":
            return {
                ...state,
                products: action.payload
            }
        default:
            return state;
    }
}