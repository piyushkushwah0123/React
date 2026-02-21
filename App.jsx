import { useState, useEffect } from "react";
import axios from "axios";
import Form from "./Abc";

function App() {

  const [data, setData] = useState([]);

  async function fetchdata() {
    let result = await axios.get("https://jsonplaceholder.typicode.com/todos");
    setData(result.data);
  }

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <>
      <Form />
      <div>
        {/* {data.slice(0,10).map((val) => {
          return <p key={val.id}>Title : {val.title}</p>
        })} */}
      </div>
    </>
  );
}

export default App;