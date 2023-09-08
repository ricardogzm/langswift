import Langswift from "./langswift";

export default function Logo() {
  return (
    <>
      <Langswift className="h-6 w-6" />
      <span className="hidden text-xl font-bold sm:inline-block">
        Langswift
      </span>
    </>
  );
}
