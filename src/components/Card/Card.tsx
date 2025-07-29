import { Link } from "react-router-dom";

type CardProps = {
  name: string;
  image: string;
  description: number;
  url: string;
  ariaLabel: string;
};

export function Card({ name, image, description, url, ariaLabel }: CardProps) {
  return (
    <Link to={url}>
      <div
        className="bg-white/10 p-5 rounded-xl backdrop-blur-lg hover:scale-105 transition-transform duration-200 cursor-pointer shadow-lg w-full md:w-3xs gap-4 flex flex-col"
        title={name}
      >
        <img
          className="w-full aspect-square object-cover rounded-lg"
          src={image}
          alt={ariaLabel}
          aria-hidden="true"
        />
        <h3 className="text-xl font-bold text-white h-8 truncate">{name}</h3>
        <p className="text-sm text-gray-300">{description}</p>
      </div>
    </Link>
  );
}
