
import DataProvider from "./context/DataProvider"
import { BrowserRouter } from "react-router-dom"
import HomePage from "./pages/HomePage"

const App = () => {
  return (
    <DataProvider>
      <BrowserRouter>
        <HomePage/>
      </BrowserRouter>
    </DataProvider>
  )
}

export default App
