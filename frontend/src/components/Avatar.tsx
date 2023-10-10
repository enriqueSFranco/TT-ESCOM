interface AvatarProps {
  photo: URL
  size?: number
}

export const Avatar: React.FC<AvatarProps> = ({ photo, size = 20 }) => {

  if (photo) {
    return (
      <div style={{ width: size, height: size }} className="overflow-hidden">
        <picture style={{ width: size, height: size }} className="overflow-hidden">
          <img src="https://unavatar.io/github/enriqueSFranco" alt="kike" className="rounded-full object-cover" />
        </picture>
      </div>
    )
  }

  return (
    <div style={{ width: size, height: size }} className="overflow-hidden">
      <picture style={{ width: size, height: size }} className="overflow-hidden">
        <img src="https://unavatar.io/github/enriqueSFranco" alt="kike" className="rounded-full object-cover" />
      </picture>
    </div>
  );
};

