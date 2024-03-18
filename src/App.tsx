import { useState } from "react";
import { Panel } from "./Panel";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
        <h2>{count}</h2>
            <Panel setCount={setCount}/>
            <br/>
            <Panel setCount={setCount}/>
        </>
    );
}

export default App;
