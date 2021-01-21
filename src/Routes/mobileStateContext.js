import { createContext } from "react";

export const MobileStateContext = createContext();

export const MobileStateProvider = ({children, display, setDisplay}) => {

    return (
        <MobileStateContext.Provider value={{display, setDisplay}}>
            {children}
        </MobileStateContext.Provider>
    )
};
