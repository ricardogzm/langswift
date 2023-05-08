"use client";

import { FlowerLotus } from "@phosphor-icons/react";

function Logo() {
  return (
    <>
      <FlowerLotus size={"2rem"} />
      <span className="hidden text-xl font-extrabold sm:inline-block">
        Langswift
      </span>
    </>
  );
}

export default Logo;
