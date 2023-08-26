import * as React from "react";
import getCharacters from "./api";

type Favorites = number[];

type ReducerPayload = { // understood 
  type: "REMOVE_FAVORITE" | "ADD_FAVORITE";
  payload: { id: number };
};

export const FavoritesContext = React.createContext<{
  favorites?: Favorites;
  dispatch: React.Dispatch<ReducerPayload>;
}>({ dispatch: () => {} });

const reducer: React.Reducer<Favorites, ReducerPayload> = (state, action) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      return [...state, action.payload.id];
    case "REMOVE_FAVORITE":
      return state.filter(favorite => favorite !== action.payload.id);
    default:
      return state;
  }
};

const FavoritesProvider = ({ children }) => {
  const [favorites, dispatch] = React.useReducer(reducer, []);

  return (
    <FavoritesContext.Provider value={{ favorites, dispatch }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const { favorites, dispatch } = React.useContext(FavoritesContext);
  return [favorites, dispatch] as const;
};

export default FavoritesProvider;
