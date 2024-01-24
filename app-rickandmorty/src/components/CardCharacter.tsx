"use client";
import Link from "next/link";
import { TCharacters } from "../types/Tcharacters";
import { cn } from "@/lib/utils";
import Image from "next/image";
function CardCharacter(character: TCharacters) {
  return (
    <Link
      href={`/characters/${character.id}`}
      className=" bg-zinc-700 rounded-3xl p-2 shadow-2xl "
    >
      <div className="flex justify-evenly items-center">
        <Image
          className="rounded-full w-32 md:w-44 p-2"
          width={128}
          height={128}
          src={character.image}
          alt={character.name}
        />
        <div className="p-2">
          <h3 className="text-xl">{character.name}</h3>
          <div className="flex flex-col  md:flex-row md:gap-x-3">
            <p
              className={cn("rounded-3xl", {
                "text-atlantis-400": character.status === "Alive",
                "text-yellow-500": character.status === "unknown",
                "text-red-500": character.status === "Dead",
              })}
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
