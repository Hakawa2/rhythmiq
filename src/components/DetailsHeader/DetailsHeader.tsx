import { BackButton } from "../BackButton/BackButton";

export type DetailsHeaderProps = {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  optionalInformation: string;
};

export function DetailsHeader({
  image,
  title,
  subtitle,
  description,
  optionalInformation,
}: DetailsHeaderProps) {
  return (
    <header
      className="flex flex-col gap-6 md:items-start"
      data-testid="details-header"
    >
      <BackButton />
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={image}
          alt={title}
          aria-hidden="true"
          className="self-center w-48 h-48 object-cover rounded-full shadow-lg"
        />
        <div className="flex flex-col items-start justify-center">
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="text-sm text-gray-300">{subtitle}</p>
          <p className="text-sm text-gray-300">{description}</p>
          <p className="text-sm text-gray-300">{optionalInformation}</p>
        </div>
      </div>
    </header>
  );
}
