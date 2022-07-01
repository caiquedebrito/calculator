import { useContext, useState } from "react"
import { DisplayContext, DisplayContextType } from "../../context/DisplayContext"

export const EqualsButton = () => {
    const {setDisplay} = useContext(DisplayContext) as DisplayContextType


    const handleClick = () => {

        setDisplay((state) => {
            let result
            try {
                result = eval(state.replace("x", "*"))
            } catch (error) {
                result = "nan"
            } finally {
                return result
            }

        })
    }
    

    return (
        <button id="equals" onClick={handleClick}>=</button>
    )
}