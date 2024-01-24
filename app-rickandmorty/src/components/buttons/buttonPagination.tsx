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
    <Button variant="default" asChild className=" m-2">
      <Link href={`/characters/${href}`}>{children}</Link>
    </Button>
  );
}
