import Link from "next/link";
import Logo from "./Logo";
import ThemeSwitch from "../theme-switch";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 shadow-sm backdrop-blur">
      <div className="flex h-14 items-center justify-between px-4">
        {/* Links */}
        <Link href="/" className="flex items-center space-x-3">
          <Logo />
        </Link>

        <div className="flex items-center">
          <ThemeSwitch />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
