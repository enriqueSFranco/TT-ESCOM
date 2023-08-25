interface ChipProps {
  label: string;
  bgColor?: `#${string}`;
  textColor?: `#${string}`;
}

export const Chip: React.FC<ChipProps> = ({
  label,
  bgColor = "#ccc",
  textColor = "#000",
}) => {
  return (
    <div
      style={{ backgroundColor: bgColor, color: textColor }}
      className='w-auto rounded-full px-2 py-0.5'
    >
      <span className="font-light text-xs">{label}</span>
    </div>
  );
};
