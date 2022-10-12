import { useContext, useState } from "react"
import { Calculator } from "../../calculator"
import { ExpressionContext } from "../../context/ExpressionContext"

const calculator = new Calculator()

export const EqualsButton = () => {
    const {expression, setExpression} = useContext(ExpressionContext)

    const handleClick = () => {
      const result = calculator.calculate(expression)
      setExpression(result)
    }

    return (
        <button id="equals" onClick={handleClick}>=</button>
    )
}