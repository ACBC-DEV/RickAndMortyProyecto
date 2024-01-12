"use client";
import { TCharacters } from "../types/Tcharacters";
import { cn } from "@/lib/utils";
import Image from "next/image";
function CardCharacter(character: TCharacters) {
  return (
    <li className="bg-zinc-700 rounded-3xl p-4 m-1 shadow-2xl gap-x-1">
      <div className="flex justify-evenly items-center">
        <Image
          className="rounded-full w-32 md:w-44 p-2"
          width={128}
          height={128}
          src={character.image}
          alt={character.name}
        />
        <div className="p-2">
          <h3>{character.name}</h3>
          <div className="flex gap-x-3">
            <p
              className={cn("rounded-3xl", {
                "text-atlantis-400": character.status === "Alive",
                "text-yellow-500": character.status === "unknown",
                "text-red-500": character.status === "Dead",
              })}
            >
              {character.status}
            </p>
            <p>-</p>
            <p>{character.gender}</p>
          </div>
        </div>
      </div>
      <p className="w-fit">
        Descripcion Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Ipsum aliquam obcaecati cupiditate ut impedit recusandae, consectetur,
      </p>
    </li>
  );
}

export default CardCharacter;
