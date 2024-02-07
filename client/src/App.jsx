import './App.css'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import {Toaster} from "react-hot-toast"
import Home from "./Pages/Home/Home"
import NonFound from "./Pages/NotFound/NotFound"
import Success from "./Pages/Success/Success"
function App() {
return <Router>
<Routes>
  <Route path='/'element={<Home/>} />
  <Route path='/success'element={<Success/>} />
  <Route path='*'element={<NonFound/>} />

</Routes>
<Toaster/>

</Router>

}

export default App
