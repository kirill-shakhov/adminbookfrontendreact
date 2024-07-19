import React, {FC} from 'react';
import {UiButtonProps} from "./index.ts";
import {UiProgressCircular} from "../UiProgressCircular";

const UiButton: FC<UiButtonProps> = ({children, href, loading, disabled, type, ...props}) => {

    return (
        <>

            {
                href ? (
                    <a
                        className={"flex justify-center items-center  px-3 py-1.5  font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"}
                        href={href}
                        target={'_blank'}
                        {...props}
                    >
                        {children}
                    </a>
                ) : (
                    <button
                        className={"flex justify-center items-center  px-3 py-1.5  font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"} {...props}
                        type={type ? type : 'button'}
                        disabled={disabled || loading}
                    >

                        {loading ? (<UiProgressCircular/>) : children}
                    </button>
                )
            }

        </>
    );
}

export default UiButton;
