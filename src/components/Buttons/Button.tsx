import { useContext } from 'react'
import { DisplayContext } from '../../context/DisplayContext'
import ButtonProps from './interface'
import './style.css'

export const Button = ({id, children} : ButtonProps) => {
    const {display, setDisplay} = useContext(DisplayContext)


    const handleClick = () => {
        const operators = /[\+\/x\.]/
        const endsWithOperator = /[-+x/\.]$/
        const endsWithNegativeSign = /\d[-+x/\.]{1}-$/
        const startsWith0 = /^0/
        const endsWithDesimal = /\.$/
        
        setDisplay(state => {

            if (startsWith0.test(state)) {
                return state.replace("0", "") + children
            }
            
            if ((/(\d+\.\d+)$/).test(state) && children === ".") return state

            if (endsWithNegativeSign.test(state)) {
                while (endsWithNegativeSign.test(state)) {
                    state = state.slice(0, -2)
                }

                return state + children
            }

            if (endsWithOperator.test(state) && operators.test(children)) {
                state = state.split("")
                state.splice(state.length-1, 1, children)
                return state.join("")
            }

            return state + children
        })
    }

    return (
        <button id={id} onClick={handleClick}>
            {children}
        </button>
    )
}