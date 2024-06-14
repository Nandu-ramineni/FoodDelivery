import { BrowserRouter } from "react-router-dom"
import HomePage from "./Vendor/Pages/HomePage"
import DataProvider from "./Vendor/Context/DataProvider"


const App = () => {
  return (
    <DataProvider>
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    </DataProvider>
  )
}

export default App
