interface ChipProps {
  label: string
  bgColor?: `#${string}`
  textColor?: `#${string}`
}

export const Chip: React.FC<ChipProps> = ({
  label,
  bgColor = "#1a1a1a ",
  textColor = "#718096",
}) => {
  return (
    <span
      style={{ backgroundColor: bgColor, color: textColor }}
      className='py-2 px-3 text-xs rounded-md inline-block whitespace-nowrap text-center bg-white/10 align-baseline font-light capitalize leading-none'
    >
      {label}
    </span>
  );
};
