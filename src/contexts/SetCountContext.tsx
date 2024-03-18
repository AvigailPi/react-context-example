import { FC, ReactNode, createContext, useState } from "react";

type SetCountContextProps = {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
};

export const SetCountContext = createContext<SetCountContextProps | null>(null);

export const SetCountProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [count, setCount] = useState(0);

    return (
        <SetCountContext.Provider value={{ count, setCount }}>{children}</SetCountContext.Provider>
    );
};
