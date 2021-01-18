import { createContext } from "react";

export const FilterContext = createContext();

export const FilterProvider = ({children, options, setOptions}) => {

    return (
        <FilterContext.Provider value={{options, setOptions}}>
            {children}
        </FilterContext.Provider>
    )
};



