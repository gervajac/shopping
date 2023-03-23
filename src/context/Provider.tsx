import { useReducer } from "react";
import { Product } from "../interfaces/interfaces.product";
import { Context } from "./Context";
import { ProductReducer } from "./Reducer";
import axios from "axios";

const INITIAL_STATE = {
  products: {},
};

interface props {
  children: JSX.Element | JSX.Element[];
}

export const Provider = ({ children }: props) => {
  const [products, dispatchProducts] = useReducer(
    ProductReducer,
    INITIAL_STATE
  );

  const getProducts = async () => {
    try {
      const resp = await axios.get("https://fakestoreapi.com/products");
      console.log(resp, "eSPRUESTA")
      return dispatchProducts({
        type: "products",
        payload: resp.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Context.Provider value={{ getProducts, products }}>
      {children}
    </Context.Provider>
  );
};
