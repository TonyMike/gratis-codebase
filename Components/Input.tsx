interface inputProps {
  placeholder: string
}

const Input = ({ placeholder }: inputProps) => {
  return (
    <input type="text" placeholder={placeholder} className="rounded-full border border-gray-700 bg-black text-sm px-4 py-3 " />
  );
}

export default Input;