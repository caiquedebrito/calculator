import { useContext } from "react";
import { DisplayContext } from "../../context/DisplayContext";
import ButtonProps from "./interface";

export const ClearButton = ({id, children}: ButtonProps) => {
    const {setDisplay} = useContext(DisplayContext)

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