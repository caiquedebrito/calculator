import { createContext, Dispatch, SetStateAction, useState } from "react";

export type DisplayContextType = {
    display: string,
    setDisplay: Dispatch<SetStateAction<string>>
}

export const DisplayContext = createContext<DisplayContextType | null>(null)

interface DisplayProps {
    children: any
}

export const DisplayProvider = ({ children }: DisplayProps) => {
    const [display, setDisplay] = useState<string>("")

    return (
        <DisplayContext.Provider value={{display, setDisplay}}>
            {children}
        </DisplayContext.Provider>
    )
}