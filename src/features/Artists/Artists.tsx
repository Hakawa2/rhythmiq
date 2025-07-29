import { Card } from "@/components/Card/Card";
import type { Artist } from "./types";

type ArtistsProps = {
  data?: Artist[];
};

export function Artists({ data }: ArtistsProps) {
  return (
    <div className="flex flex-wrap gap-4 md:gap-10">
      {data &&
        data.map((artist: Artist) => (
          <Card
            key={artist.id}
            image={artist.image}
            name={artist.name}
            popularity={artist.popularity}
            url={artist.uri}
          />
        ))}
    </div>
  );
}
