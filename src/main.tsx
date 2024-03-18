import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { SetCountProvider } from "./contexts/SetCountContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <SetCountProvider>
        <App />
    </SetCountProvider>
);
