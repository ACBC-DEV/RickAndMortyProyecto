"use client";
import { Button } from "@/components/ui/button";
import useStore from "@/store/useStore";
import { useRouter } from "next/navigation";
export default function ButtonBack() {
  const router = useRouter();
  const { page } = useStore();

  return (
    <Button
      variant="outline"
      onClick={() => router.push(`/characters?page=${page}`)}
      className="w-20 h-10 m-2 rounded-3xl bg- border-2 border-white"
    >
      Back
    </Button>
  );
}
