import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";
interface ButtonPaginationProps {
  children: ReactNode;
  href: string;
}

export default function ButtonPagination({
  children,
  href,
}: ButtonPaginationProps) {
  return (
    <Button
      variant="ghost"
      asChild
      className="m-2 w-40  border-2 border-white rounded-3xl"
    >
      <Link href={`/characters/${href}`}>{children}</Link>
    </Button>
  );
}
