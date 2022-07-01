import { Button } from "./components/Buttons/Button"
import './App.css'
import { ClearButton } from "./components/Buttons/ClearButton"
import { Display } from "./components/Display"
import { DisplayProvider } from "./context/DisplayContext"
import { EqualsButton } from "./components/Buttons/EqualsButton"


function App() {

  return (
    <div className="app">
      <DisplayProvider>
        <Display />
        <div className="container-button">
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
      </DisplayProvider>
    </div>
  )
}

export default App
