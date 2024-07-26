import {FC} from 'react';

interface UiAvatarProps {
  image: string;
  size?: number;
}

const UiAvatar: FC<UiAvatarProps> = ({image, size = 40}) => {
  return (
    <div>
      <img
        className="rounded-full object-cover"
        src={image}
        alt="avatar"
        style={{width: size, height: size}}
      />
    </div>
  );
};

export default UiAvatar;
