import React, {FC} from 'react';
import {UiButtonProps} from "./UiButton.types.ts";


const UiButton: FC<UiButtonProps> = ({children, ...props}) => {
    return (
        <button
            className={"flex justify-center items-center  px-3 py-1.5  font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"} {...props}>
            {children}
        </button>
    );
}

export default UiButton;
