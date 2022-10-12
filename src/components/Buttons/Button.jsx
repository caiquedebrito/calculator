import { useEffect } from 'react'
import { useContext } from 'react'
import { ExpressionContext } from '../../context/ExpressionContext'
import './style.css'


export const Button = ({id, children}) => {
    const { expression, setExpression } = useContext(ExpressionContext)

    const verifyErrors = () => {
      const operators = /[\+\/x\.]/g
      const doubleDot = /\d+\.\d+$/
      const expression1 = /\d+\.\d+[\/x]\-$/
      const expression2 = /\d+\.\d+[\/x]\-$/

      return (!expression && operators.test(children)) || (expression === '-' && operators.test(children)) || (doubleDot.test(expression) && children === '.') || (expression1.test(expression) && children === '.') || (expression2.test(expression) && children === ".")

    }

    const refactorExpression = () => {
      const endsWithMultiplyOrDivide = /[\/x]$/
      const endsWithOperator = /\D$/g
      const operators = /\D/g
      const endsWithZero = /\D0$/
      const numbers = /\d/
        
      if (endsWithMultiplyOrDivide.test(expression) && children == '-') {
        return setExpression(expression + children)
      }
      
      if ((endsWithZero.test(expression) && numbers.test(children)) || (expression === '0' && numbers.test(children))) {
        const copyExp = expression.split('')
        copyExp.pop()
        return setExpression(copyExp.join('') + children)
      }
      
      if (operators.test(children) && endsWithOperator.test(expression)) {
        const copyExp = expression.split('')
        const endsWithDoubleOperator = /\D{2}$/
        
        if (endsWithDoubleOperator.test(expression)) {
          copyExp.pop()
        }
        
        copyExp.pop()
  
        return setExpression(copyExp.join('') + children)
      }
      
      return setExpression(expression + children)
    }

    const handleClick = () => {
        if (verifyErrors()) {
          return
        } else {
          return refactorExpression()
        }
    }

    return (
        <button id={id} onClick={handleClick}>
            {children}
        </button>
    )
}