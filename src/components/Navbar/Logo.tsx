"use client";

import { Hexagon } from "lucide-react";

function Logo() {
  return (
    <>
      <Hexagon size={"1.5rem"} strokeWidth={2.5} />
      <span className="hidden text-xl font-extrabold sm:inline-block">
        Langswift
      </span>
    </>
  );
}

export default Logo;
