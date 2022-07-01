import { useContext } from 'react'
import { DisplayContext } from '../../context/DisplayContext'
import './style.css'

export const Display = () => {
    const {display} = useContext(DisplayContext)

    return (
        <div id="display">
            {display}
        </div>
    )
}