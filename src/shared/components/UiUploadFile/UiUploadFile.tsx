// AvatarUpload.tsx
import {ChangeEvent, FC} from 'react';
import {useField, useFormikContext} from 'formik';

interface AvatarUploadProps {
  name: string;
}

const UiUploadFile: FC<AvatarUploadProps> = ({name}) => {
  const {setFieldValue} = useFormikContext();
  const [field, meta] = useField(name);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.files) {
      setFieldValue(name, event.currentTarget.files[0]);
    }
  };

  return (
    <div className={'flex flex-col'}>
      <label htmlFor={name}>Upload File</label>
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

      {meta.error && meta.touched && <div className={"text-red-500"}>{meta.error}</div>}
    </div>
  );
};

// {
//   "message": "Книга успешно добавлена",
//   "book": {
//   "title": "test",
//     "book": "https://cloud-read.s3.eu-west-3.amazonaws.com/books/df49fd68-9d62-4cac-a700-d882a644421a.pdf",
//     "genre": "66a88fd11a7dda5a55660051",
//     "author": "66a88fd21a7dda5a55660054",
//     "user": "65ae4fd460e5b92777d9a981",
//     "_id": "66a88fd21a7dda5a55660056",
//     "__v": 0
// }
// }
export default UiUploadFile;
