import { FC } from "react";
import { Button } from "./Button";

export const Panel: FC = () => {
    return (
        <div>
            <Button isAdd={true}/>
            <Button isAdd={false}/>
        </div>
    );
};
