import { FC } from "react";
import { Button } from "./Button";

type PanelProps = {
    setCount: React.Dispatch<React.SetStateAction<number>>;
}

export const Panel: FC<PanelProps> = ({setCount}) => {
    return (
        <div>
            <Button isAdd={true} setCount={setCount}/>
            <Button isAdd={false} setCount={setCount}/>
        </div>
    );
};
