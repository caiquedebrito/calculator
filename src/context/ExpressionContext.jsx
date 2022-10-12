import { createContext, Dispatch, SetStateAction, useState } from "react";

export const ExpressionContext = createContext()

export const ExpressionProvider = ({ children }) => {
    const [expression, setExpression] = useState("")

    return (
        <ExpressionContext.Provider value={{ expression, setExpression }}>
            {children}
        </ExpressionContext.Provider>
    )
}