export type InputProps = {
  value: string;
  setValue: (arg: string) => void;
  placeholder: string;
};

export function Input({ value, setValue, placeholder }: InputProps) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="w-full p-3 rounded-xl text-white font-bold placeholder-gray-400 outline-none ring-2 ring-purple-400"
    />
  );
}
