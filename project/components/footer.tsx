import Link from "next/link";

export default function Footer() {
  return (
    <div className="p-10 px-20 bg-transparent text-primary-foreground flex justify-between items-center text-center">
      <h1 className="text-2xl font-bold">LearnProf</h1>
      <p>© 2025 LearnProf. All rights reserved.</p>
      <div className="flex gap-4">
        <Link href="/">Terms</Link>
        <Link href="/">Privacy</Link>
        <Link href="/">Contact</Link>
      </div>
    </div>
  );
}
