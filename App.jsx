import { useState, useEffect } from "react";
import axios from "axios";
import Form from "./Abc";
import Abc from "./Abc";
import {BrowserRouter,Route,Routes , Link} from "react-router"

function App() {

  const [data, setData] = useState([]);
  const [isLoggedIn , setIsLoggedIn] = useState(false) 
  console.log();

  async function fetchdata() {
    let result = await axios.get("https://jsonplaceholder.typicode.com/todos");
    setData(result.data);
  }

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <>    
      <BrowserRouter>
<div>
      <nav>
        <Link to="/">home</Link>
        <Link to="/about">About</Link>
      </nav>
    </div>

      <Routes>
        <Route path="/" element={<Abc/>} ></Route>
        <Route path="*" element={<h1>page not found</h1>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;