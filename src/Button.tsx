import { FC } from "react";

type ButtonProps = {
    isAdd: boolean;
    setCount: React.Dispatch<React.SetStateAction<number>>;
};

export const Button: FC<ButtonProps> = ({ isAdd, setCount }) => {
    const handleClick = () => {
        setCount((prev) => (isAdd ? prev + 1 : prev - 1));
    };

    return <button onClick={handleClick}>{isAdd ? "add 1" : "subtract 1"}</button>;
};
