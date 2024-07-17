import React, {FC} from 'react';
import {UiButtonProps} from "./index.ts";

const UiButton: FC<UiButtonProps> = ({children, href, disabled, type, ...props}) => {
    return (
        <>

            {
                href ? (
                    <a
                        className={"flex justify-center items-center  px-3 py-1.5  font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"}{...props}
                        href={href}
                        target={'_blank'}
                    >
                        {children}
                    </a>
                ) : (
                    <button
                        className={"flex justify-center items-center  px-3 py-1.5  font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"} {...props}
                        type={type ? type : 'button'}
                        disabled={disabled}
                    >
                        {children}
                    </button>
                )
            }

        </>
    );
}

export default UiButton;
