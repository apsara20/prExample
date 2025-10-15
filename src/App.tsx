import { Route, Routes } from "react-router"
import Header from "./Header"
import Auth from "./pages/Auth"
import Recipt from "./pages/Recipt"
import TodoForm from "./Todoform"
import Grid from "./Grid"
import Login from "./Auth/Login"

function App() {

  return (
    <>
             <Header/>

      <Routes>
        <Route path="/dashboard" element={ <Recipt/>}/>
        <Route path="/" element={ <TodoForm/> }/>
        <Route path="/auth" element={ <Auth/> }/>
        <Route path="/grid" element={ <Grid/> }/>
        <Route path="/login" element={ <Login/> }/>


      </Routes>
       


    </>
  )
}

export default App
