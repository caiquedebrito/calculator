import React from 'react'
import { useContext } from 'react'
import { ExpressionContext } from '../../context/ExpressionContext'

export const DeleteButton = () => {
  const { expression, setExpression } = useContext(ExpressionContext)

  const handleClick = () => {
    setExpression(() => {
      if (!expression) {
        return expression
      }

      const copyExpression = expression.split("")
      copyExpression.pop()

      return copyExpression.join("")
    })
  }

  return (
    <button onClick={handleClick}>
      C
    </button>
  )
}
