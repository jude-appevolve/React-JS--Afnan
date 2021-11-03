import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
   const [value, setValue] = useState("");
   const django = () => {
     axios.get("/api").then((data) => setValue(data.data));
   };
  return (
    <div className="App">
      
      <button onClick={django}> Click me for backend connection</button> 
      {value && value} 
    </div>
  );
}

export default App;
