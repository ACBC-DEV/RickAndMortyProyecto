import type { TCharacters } from "@/types";
import Image from "next/image";
import { cn } from "@/lib/utils";
export default function Character({
  image,
  name,
  status,
  gender,
  location,
  origin,
  species,
}: TCharacters) {
  return (
    <>
      <section className="bg-mine-shaft-800 rounded-[50px] p-4 py-6 m-2 shadow-2xl border-4 border-white gap-2  ">
        <div className="flex justify-evenly items-center">
          <Image
            className="rounded-full w-52 md:w-96 p-2 "
            width={128}
            height={128}
            src={image}
            alt={name}
          />
          <div className="p-2 grid place-content-center">
            <h3 className="mx-auto text-2xl md:text-5xl lg:text-7xl">{name}</h3>
            <div className="flex gap-x-3 ">
              <p
                className={cn("text-lg md:text-2xl", {
                  "text-atlantis-400": status === "Alive",
                  "text-yellow-500": status === "unknown",
                  "text-red-500": status === "Dead",
                })}
              >
                {status}
              </p>
              <p className="text-lg md:text-2xl">{gender}</p>
            </div>
            <h4 className="text-center text-lg md:text-2xl">{species}</h4>
          </div>
        </div>
        <div className="w-full  flex items-center justify-center gap-x-2  mb-5 text-lg md:text-2xl">
          <p className="text-center ">{origin.name}</p>-
          <p className="text-center">{location.name}</p>
        </div>
        <p className="w-fit text-xl">
          Descripcion Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Ipsum aliquam obcaecati cupiditate ut impedit recusandae, consectetur,
        </p>
      </section>
    </>
  );
}
