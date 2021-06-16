import axios from "axios";
import React, { useReducer } from "react";

const INIT_STATE = {
  products: [],
};

const reduser = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };

    default:
      return state;
  }
};

export const storeContext = React.createContext();
const URL = "http://localhost:8000";

export default function StoreContextProvider(props) {
  const [state, dispatch] = useReducer(reduser, INIT_STATE);

  const fetchProducts = async () => {
    const { data } = await axios.get(`${URL}/products`);

    console.log(data);
    dispatch({
      type: "SET_PRODUCTS",
      payload: data,
    });
  };

  return (
    <storeContext.Provider
      value={{
        products: state.products,
        fetchProducts,
      }}
    >
      {props.children}
    </storeContext.Provider>
  );
}
