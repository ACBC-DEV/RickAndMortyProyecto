"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
export default function ButtonBack() {
  const router = useRouter();
  return (
    <Button
      variant="outline"
      onClick={() => router.back()}
      className="w-20 h-10 m-2 rounded-3xl bg- border-2 border-white"
    >
      Back
    </Button>
  );
}
