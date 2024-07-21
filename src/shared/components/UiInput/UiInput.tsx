import {FC} from "react";
import {UiInputProps} from "./UiInput.types.ts";
import {useUiInput} from "./useUiInput.tsx";
// import {ExclamationCircleIcon} from '@heroicons/react/24/solid'

const UiInput: FC<UiInputProps> =
  ({
     label,
     name,
     type,
     placeholder,
     autoComplete,
     readOnly,
     disabled,
     value,
     onChange,
     onBlur,
     errors,
     touched
   }) => {

    const {rootClasses} = useUiInput({readOnly, disabled, errors, touched});

    return (
      <>
        {label && <label className={"block text-sm font-medium leading-6 text-gray-900"} htmlFor={name}>{label}</label>}

        <div className={'ui-input-wrap relative mt-2'}>
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            autoComplete={autoComplete}
            readOnly={readOnly}
            disabled={disabled}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            className={rootClasses}
          />


          {/*{errors ? <div className={'pr-3 items-center flex right-0 top-0 bottom-0 absolute pointer-events-none'}>*/}
          {/*  <ExclamationCircleIcon className="size-6 text-red-500"/>*/}
          {/*</div> : ''}*/}
        </div>


        <div className={"text-red-500"}>
          {errors && touched && errors}
        </div>
      </>
    );
  }

export default UiInput;