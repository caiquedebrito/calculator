import React from 'react'
import { useContext } from 'react'
import { ExpressionContext } from '../../context/ExpressionContext'
import './style.css'

export const Display = () => {
    const { expression } = useContext(ExpressionContext)

    return (
        <input id="display" value={expression} readOnly/>
    )
}