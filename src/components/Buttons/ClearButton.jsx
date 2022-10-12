import { useContext } from "react";
import { ExpressionContext } from "../../context/ExpressionContext";

export const ClearButton = ({id, children}) => {
    const { setExpression } = useContext(ExpressionContext)

    const clearDisplay = () => setExpression("")

    return (
        <button 
            id={id}
            onClick={clearDisplay}
        >
            {children}
        </button>
    )
}