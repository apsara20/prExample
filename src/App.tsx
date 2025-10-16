import { Route, Routes } from "react-router"
import Header from "./Header"
import Recipt from "./pages/Recipt"
import TodoForm from "./Todoform"
import Grid from "./Grid"
import Login from "./pages/Login"

function App() {

  return (
    <>
             <Header/>

      <Routes>
        <Route path="/dashboard" element={ <Recipt/>}/>
        <Route path="/" element={ <TodoForm/> }/>
        <Route path="/grid" element={ <Grid/> }/>
                <Route path="/login" element={ < Login/> }/>



      </Routes>
       


    </>
  )
}

export default App
