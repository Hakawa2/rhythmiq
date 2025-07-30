type ListProps = {
  title: string;
  showNumbers: boolean;
  data: {
    title: string;
    subtitle: string;
    id: string;
  }[];
};

export function List({ data, showNumbers, title }: ListProps) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-2xl text-center font-semibold">{title}</h3>
      <ul className="flex flex-col gap-4">
        {data.map((item, index) => (
          <li
            className="bg-white/10 p-4 rounded-xl flex flex-col justify-between items-start hover:bg-white/20 transition"
            key={item.id}
          >
            <p className="text-white font-medium">
              {showNumbers && `${index + 1}. `}
              {item.title}
            </p>
            <p className="text-sm text-gray-400">{item.subtitle}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
