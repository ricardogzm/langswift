import { atomWithStorage } from "jotai/utils";

const fromLanguageAtom = atomWithStorage("fromLanguage", "");
const toLanguageAtom = atomWithStorage("toLanguage", "");

export { fromLanguageAtom, toLanguageAtom };
