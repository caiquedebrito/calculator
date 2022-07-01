import { useContext } from 'react'
import { DisplayContext, DisplayContextType } from '../../context/DisplayContext'
import './style.css'

export const Display = () => {
    const {display} = useContext(DisplayContext) as DisplayContextType

    return (
        <div id="display">
            {display}
        </div>
    )
}