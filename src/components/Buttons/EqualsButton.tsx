import { useContext, useState } from "react"
import { DisplayContext } from "../../context/DisplayContext"

export const EqualsButton = () => {
    const {display, setDisplay} = useContext(DisplayContext)


    const handleClick = () => {

        setDisplay(state => {
            let result
            try {
                result = eval(state.replace("x", "*"))
            } catch (error) {
                console.log(error)
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