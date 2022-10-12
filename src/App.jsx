import './App.css'
import { Display } from "./components/Display"
import { ExpressionProvider } from "./context/ExpressionContext"
import { ButtonsGrid } from "./components/ButtonsGrid"

function App() {

  return (
    <div className="app">
      <ExpressionProvider>
        <Display />
        <ButtonsGrid />
      </ExpressionProvider>
    </div>
  )
}

export default App
