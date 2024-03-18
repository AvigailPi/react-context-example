import { FC, useContext } from "react";
import { SetCountContext } from "./contexts/SetCountContext";

type ButtonProps = {
    isAdd: boolean;
}

export const Button: FC<ButtonProps> = ({isAdd}) => {
    const setCountContext = useContext(SetCountContext);
    if(setCountContext === null) throw new Error("no context!");


    const handleClick = () => {
        setCountContext.setCount(prev => isAdd ? prev + 1 : prev - 1);
    }

    return (
        <button onClick={handleClick}>
            {isAdd ? "add 1" : "subtract 1"}
        </button>
    )
}