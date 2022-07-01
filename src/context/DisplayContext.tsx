import { Children, createContext, useState } from "react";

export const DisplayContext = createContext("")

interface DisplayProps {
    children: any
}

export const DisplayProvider = ({ children }: DisplayProps) => {
    const [display, setDisplay] = useState("")

    return (
        <DisplayContext.Provider value={{display, setDisplay}}>
            {children}
        </DisplayContext.Provider>
    )
}