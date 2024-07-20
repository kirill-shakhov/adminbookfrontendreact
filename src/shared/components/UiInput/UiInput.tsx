import {FC} from "react";
import {UiInputProps} from "./UiInput.types.ts";
import {useUiInput} from "./useUiInput.tsx";

const UiInput: FC<UiInputProps> =
  ({
     name,
     type,
     placeholder,
     autoComplete,
     readOnly,
    disabled
   }) => {

    const {rootClasses} = useUiInput({readOnly});

    return (
      <>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          autoComplete={autoComplete}
          readOnly={readOnly}
          disabled={disabled}
          className={rootClasses}
        />

        <div>
          {/*{errors.password && touched.password && errors.password}*/}
        </div>
      </>
    );
  }

export default UiInput;