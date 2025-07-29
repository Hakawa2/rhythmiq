import { SearchHandler } from "@/components/SearchHandler/SearchHandler";
import { useFindDetails } from "@/hooks/useFindDetails";
import { useParams } from "react-router-dom";

export function Artists() {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, isError } = useFindDetails("artists", id ?? "");
  console.log(data);

  return (
    <>
      <SearchHandler isLoading={isLoading} isError={isError}>
        {data && (
          <>
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <img
                src={data.image}
                alt={data.name}
                className="w-48 h-48 object-cover rounded-full shadow-lg"
              />
              <div>
                <h1 className="text-3xl font-bold">{data.name}</h1>
                <p className="text-sm text-gray-300">{data.popularity}</p>
                <p className="text-sm text-gray-300">{data.followers}</p>
                <p className="text-sm text-gray-300">{data.genres}</p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl text-center font-semibold mb-4">
                Top músicas
              </h3>
              <ul className="space-y-2">
                {data &&
                  data.topTracks.map((track, index) => (
                    <li
                      key={track.id}
                      className="bg-white/10 p-4 rounded-xl flex justify-between items-center hover:bg-white/20 transition"
                    >
                      <div>
                        <p className="text-white font-medium">
                          {index + 1}. {track.name}
                        </p>
                        <p className="text-sm text-gray-400">
                          {Math.floor(track.duration_ms / 60000)}:
                          {String(
                            Math.floor((track.duration_ms % 60000) / 1000)
                          ).padStart(2, "0")}
                        </p>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          </>
        )}
      </SearchHandler>
    </>
  );
}
