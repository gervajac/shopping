import { createContext } from "react";

export type ContextProps = {
    products: any
    getProducts: any
}

export const Context = createContext<ContextProps>({} as ContextProps);