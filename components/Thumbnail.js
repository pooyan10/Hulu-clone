import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";
import { forwardRef } from "react";

const Thumbnail = forwardRef(({ result }, ref) => {
  console.log(result);
  const BASE_URL = "https://image.tmdb.org/t/p/original/";

  return (
    <div
      ref={ref}
      className="p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50"
    >
      <Image
        alt=""
        className="rounded-md"
        layout="responsive"
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${BASE_URL}${result.poster_path}`
        }
        height={1080}
        width={1920}
      />
      <div className="p-2 group">
        <p className="truncate max-w-md">{result.overview}</p>
        <h2 className="text-2xl mt-1 text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {result.original_title || result.title || result.name}
        </h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100 transition duration-150">
          {result.release_date || result.first_air_date}{" "}
          <ThumbUpIcon className="h-5 mx-2" /> {result.vote_count}
        </p>
      </div>
    </div>
  );
});

export default Thumbnail;
