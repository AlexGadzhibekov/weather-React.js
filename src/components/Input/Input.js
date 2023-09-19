export default function Input({
  className,
  placeholder,
  onChange,
  value,
  onKeyPress,
}) {
  return (
    <input
      className={className}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      onKeyPress={onKeyPress}
    ></input>
  );
}
