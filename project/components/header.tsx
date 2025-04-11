import Link from "next/link";
import { Button } from "@/components/ui/button";
import { IconBrain } from "@tabler/icons-react";

export default function Header() {
  return (
    <div className="sticky top-0 z-50 flex justify-between items-center p-4 px-20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="flex items-center gap-2">
        <IconBrain className="h-6 w-6" />
        <h1 className="text-2xl font-medium">LearnProf</h1>
      </div>

      <nav>
        <ul className="flex gap-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/courses">Courses</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
      <div className="flex gap-4">
        <Button variant="secondary" className="hover:cursor-pointer">
          Login
        </Button>
        <Button className="hover:cursor-pointer">Sign Up</Button>
      </div>
    </div>
  );
}
