type InputProps = {
  search: string;
  setSearch: (arg: string) => void;
  placeholder: string;
};

export function Input({ search, setSearch, placeholder }: InputProps) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full p-3 rounded-xl text-black placeholder-gray-500 outline-none ring-2 ring-purple-400"
    />
  );
}
