import { createContext } from "react";

export const StateContext = createContext();

export const StateProvider = ({children, isFavoriteTime, setFavouriteTime}) => {

    return (
        <StateContext.Provider value={{isFavoriteTime, setFavouriteTime}}>
            {children}
        </StateContext.Provider>
    )
};
