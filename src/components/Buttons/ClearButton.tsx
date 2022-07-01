import { useContext } from "react";
import { DisplayContext, DisplayContextType } from "../../context/DisplayContext";
import ButtonProps from "./interface";

export const ClearButton = ({id, children}: ButtonProps) => {
    const {setDisplay} = useContext(DisplayContext) as DisplayContextType

    const clearDisplay = () => setDisplay("0")

    return (
        <button 
            id={id}
            onClick={clearDisplay}
        >
            {children}
        </button>
    )
}