"use client";
import Link from "next/link";
import { TCharacters } from "../../types/TCharacters";
import { cn } from "@/lib/utils";
import Image from "next/image";
function CardCharacter(character: TCharacters) {
  return (
    <Link
      href={`/characters/${character.id}`}
      className="bg-mine-shaft-900 border-2 border-white rounded-3xl p-2 shadow-2xl duration-300  hover:shadow-3xl hover:scale-110 hover:z-10"
    >
      <div className="flex justify-evenly items-center">
        <Image
          className="rounded-full w-32 md:w-44 m-2 hover:scale-110 duration-300"
          width={128}
          height={128}
          src={character.image}
          alt={character.name}
        />
        <div className="p-2 ">
          <h3 className="text-xl">{character.name}</h3>
          <div className="flex flex-col  justify-center items-center md:flex-row md:gap-x-3  p-2">
            <p
              className={cn(
                "rounded-3xl border-2 p-2 hover:scale-125 duration-300",
                {
                  "text-atlantis-400 border-atlantis-400":
                    character.status === "Alive",
                  "text-yellow-500 border-yellow-500 ":
                    character.status === "unknown",
                  "text-red-500 border-red-500 ": character.status === "Dead",
                }
              )}
            >
              {character.status}
            </p>

            <p>{character.gender}</p>
          </div>
        </div>
      </div>
      <p className="w-fit">
        Descripcion Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Ipsum aliquam obcaecati cupiditate ut impedit recusandae, consectetur,
      </p>
    </Link>
  );
}

export default CardCharacter;
