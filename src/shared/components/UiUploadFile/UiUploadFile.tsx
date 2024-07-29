// AvatarUpload.tsx
import {ChangeEvent, FC} from 'react';
import {useField, useFormikContext} from 'formik';

interface AvatarUploadProps {
  name: string;
}

const UiUploadFile: FC<AvatarUploadProps> = ({name}) => {
  const {setFieldValue} = useFormikContext();
  const [field] = useField(name);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.files) {
      setFieldValue(name, event.currentTarget.files[0]);
    }
  };

  return (
    <div>
      <label htmlFor={name}>Upload Avatar</label>
      <input id={name} name={name} type="file" onChange={handleFileChange}/>
      {field.value && (
        <div>
          <img
            src={URL.createObjectURL(field.value)}
            alt="Avatar Preview"
            style={{width: '100px', height: '100px', objectFit: 'cover'}}
          />
        </div>
      )}
    </div>
  );
};

export default UiUploadFile;
