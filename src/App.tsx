import { useContext } from "react";
import { Panel } from "./Panel";
import { SetCountContext } from "./contexts/SetCountContext";
import "./App.css";

function App() {
    const setCountContext = useContext(SetCountContext);
    if(setCountContext === null) throw new Error("no context!");

    return (
        <>
        <h2>{setCountContext.count}</h2>
            <Panel/>
            <br/>
            <Panel/>
        </>
    );
}

export default App;
