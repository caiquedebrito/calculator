import React from 'react'
import { ClearButton } from '../Buttons/ClearButton'
import { Button } from '../Buttons/Button'
import { EqualsButton } from "../Buttons/EqualsButton"
import { DeleteButton } from '../Buttons/DeleteButton'
import { StaticButton } from '../Buttons/StaticButton'

export const ButtonsGrid = () => {
  return (
    <div className="buttons-container">
      <DeleteButton />
      <StaticButton>+/-</StaticButton>
      <StaticButton>%</StaticButton>
      <ClearButton id="clear">DEL</ClearButton>
      <Button id="seven">7</Button>
      <Button id="eight">8</Button>
      <Button id="nine">9</Button>
      <Button id="multiply">/</Button>
      <Button id="four">4</Button>
      <Button id="five">5</Button>
      <Button id="six">6</Button>
      <Button id="divide">x</Button>
      <Button id="one">1</Button>
      <Button id="two">2</Button>
      <Button id="three">3</Button>
      <Button id="subtract">-</Button>
      <Button id="zero">0</Button>
      <Button id="decimal">.</Button>
      <EqualsButton />
      <Button id="add">+</Button>
    </div>
  )
}
